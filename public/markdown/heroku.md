# Hosting in Heroku
This is a tutorial for users who would like to host their own FredBoat instance into the cloud. As Heroku provides a free tier it's possible to host without any costs involved.

## Requirements to host Fredboat in Heroku

1. [Git](https://www.atlassian.com/git/tutorials/install-git)

2. [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

3. [Postgres 10.1](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) 
Only to use the `psql` client to add the hstore addon on the remote database. Completing the Stack Builder installation is not necessary.

4. A [Heroku](https://www.heroku.com/) account.

5. A folder that contains the following files:
- `FredBoat.jar`
- `FredBoat.yaml`
- [`Procfile`](https://github.com/FredBoat/fredboat.com/blob/master/Procfile)
- `Quarterdeck.jar`
- `quarterdeck.yaml`
- [`system.properties`](https://github.com/FredBoat/fredboat.com/blob/master/system.properties)

Should look like this:

[![Folder with files](https://imgur.com/7ClL7mJ.png)](https://imgur.com/7ClL7mJ.png)  

## Instructions to host Fredboat in Heroku
The instruction assumes a fully working config is already made. Only the necessary changes are included.
Open git bash inside the folder you've just made and type these commands in it:

```
git init
heroku apps:create fredsboatmainapp --region eu
heroku addons:create heroku-postgresql:hobby-dev
echo 'create extension hstore' | heroku pg:psql
heroku buildpacks:set heroku/jvm
```
Replace fredsboatmainapp with a name you like, lowercase only. Optionally you change the region to `us` if that's closer to your servers.

In the fredboat.yaml file make sure to set the host to the URL you receive from this command:
`heroku info -s | grep web_url | cut -d= -f2`

In the quarterdeck.yaml file make sure that the server port is set to `443` for the backend.

To get the main database jdbcUrl you can do the following command:
`heroku pg:credentials:url`
Do note that the format is not correct! 

Example:
`postgres://akkoctcncribcj:8184c021c8c25fe0fb7a0eb1abff842501f9aa80705cac8996e831249f3eccbc@ec2-54-75-227-92.eu-west-1.compute.amazonaws.com:5432/deqg8ktnfnlapjpj` 

Which needs to be transformed into this format:

`jdbc:postgresql://ec2-54-75-227-92.eu-west-1.compute.amazonaws.com:5432/deqg8ktnfnlapj?user=akkoctcncribcj&password=8184c021c8c25fe0fb7a0eb1abff842501f9aa80705cac8996e831249f3eccbc`

Now all the files are ready and it's time to update your app with the new files!
Type the following commands to push changes:
```
git add .
git commit -am "First commit!"
git push heroku master
```

Now the final part is to enable the web worker.
`heroku ps:scale web=1`

## Cache database
Make sure you're working in a different folder for this.
It's recommended to use the same region where the mainapp is located.
Type the following commands into git bash:
```
git init
heroku apps:create fredsboatcacheapp --region eu
heroku addons:create heroku-postgresql:hobby-dev
echo 'create extension hstore' | heroku pg:psql
```
Don't forget to add the cache database to your quarterdeck.yaml.

Now go back to your main app folder. Start git bash one more time and type the following command:
`heroku addons:attach fredsboatcacheapp::DATABASE --app fredsboatmainapp`

Update the main app again by typing in git bash:
```
git add .
git commit -am "The second commit!"
git push heroku master
```

### Troubleshooting 
- Make sure you are logged in. You can log in with the `heroku login` command.
- You can find your logs by typing: `heroku logs --tail`. It's recommended to start logging before pushing/start your app.
- You can run into problems if you didn't install all the requirements, double check your configs or check if skipped a command.


### Considerations
Hosting FredBoat this way is fine, but there are some downsides using Heroku to host FredBoat.

1. On the free and hobby plans, Heroku allows a maximum of 24 hours uptime, with a delay up to 2 to 3 hours. This means that your FredBoat restarts around the time you deployed the code. This can differ up to 4 hours.
2. Heroku uses an ephemeral filesystem. This means that every change that occurs after you pushed your files isn't saved. The downside of this is that when FredBoat restarts, no songs are reloaded. Also, all the errors that aren't sent to the Sentry are lost too.
3. It's possible to use the local file playing, it's limited however due to the maximum file size of 500mb per app. The project itself uses up to 200mb. You can experience slower boot times when exceeding 400mb.
4. Heroku will put FredBoat to sleep after 30 minutes of inactivity. There's many different ways to prevent Heroku from putting your bot to sleep. You can create a script that pings the bot every now and then to keep it awake, but keep in mind that it will use up more of your hours of your plan. You can also try using the Heroku Scheduler addon to keep it awake during certain times of the day. You can read about it [here](https://devcenter.heroku.com/articles/free-dyno-hours)
