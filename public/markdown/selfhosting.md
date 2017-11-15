# Selfhosting FredBoat
This is a tutorial for users who would like to host their own FredBoat instance. Please bear in mind that this is not a requirement for using the FredBoat service as there is a [public FredBoat♪♪](https://goo.gl/cFs5M9) hosted and provided that is simple to use.

**This tutorial is for advanced users. If you can't figure out how to run this, please use the [public FredBoat♪♪](https://goo.gl/cFs5M9)**

As the first part of word *self*hosting implies, this is all about doing things your*self*. If you love tinkering around with things and can use your preferred search engine to resolve 95% of the issues you run into by your*self*, then this guide is definitely for you and we welcome you to join us in the #selfhosting channel on [FredBoat Hangout](https://discord.gg/cgPFW4q) for those last tricky 5% of questions.


Having that out of the way, let's dive right in!


## General notes

FredBoat runs preferably on an x86_64/AMD64 CPU. Strange things may happen if you try running FredBoat on an ARM CPU like on a Raspberry Pi. If you have no idea what this means, you're probably doing it right and don't have to worry.

FredBoat requires a PostgreSQL database to run. The easiest way to achieve that is by using the docker part of this tutorial.

Whenever editing any files, use a proper text editor (like [Sublime](http://www.sublimetext.com/)) and keep the rules for YAML files in mind: never use tabs, always spaces, indentation is important.


# Selfhost with Docker and Docker Compose (recommended)

**Why is this the recommended way to selfhost FredBoat?**  
- Docker works on almost any architecture and platform out there in the same way - be it Windows, Mac OS, tons of Linux distros or even your spare Raspberry Pi.
- You don't have to install Java or any build tools like git or gradle, and copy paste obscure commands to have them spit out a jar, because our [CI server](https://ci.fredboat.com) builds the jar for you and publishes an official FredBoat docker image to the [official docker hub](https://hub.docker.com/r/fredboat/fredboat/).
- You don't have to set up, configure and secure a [PostgreSQL database](https://www.postgresql.org/) which is required by FredBoat, because we built a docker image for that and docker-compose will set it up and start it together with FredBoat and keep it running.
- You can easily configure automated updates using an additional, optional 3rd party docker image called [Watchtower](https://github.com/v2tec/watchtower).
- All containers will automatically be started when the machine you are using to host FredBoat reboots / starts.


## Requirements

1. [Docker Community Edition](https://docs.docker.com/engine/installation/)

2. [Docker Compose](https://docs.docker.com/compose/install/)

3. A folder containing the following files:
- `docker-compose.yml`
- `config.yaml`
- `credentials.yaml`

You can get the files from [our CI server](#ci-server).

Should look like this:  
[![Folder with files](https://fred.moe/qOQ.png)](https://fred.moe/qOQ.png)  
or this in the command line:  
[![Folder with files from command line](https://fred.moe/bMZ.png)](https://fred.moe/bMZ.png)

It is very important that you read each of those files carefully top to bottom, as they explain all required and a few advanced options to run your FredBoat, and fill them out accordingly.

- The `docker-compose.yml` explains some Windows platform specific configuration for the database, how to pick stable vs development FredBoat builds, and how to enable automatic updates
- The `config.yaml` allows you to customize your FredBoat
- The `credentials.yaml` tells you what tokens and codes and passwords are needed, which are optional, and where to get them, to run your FredBoat.

Make sure to rename `credentials.yaml.example` to `credentials.yaml` before starting FredBoat.

Got all those things together? [Click here](#config-and-credentials) to learn how to set up config and credentials files, then proceed with the instructions on how to run FredBoat with docker-compose.


## Run FredBoat with docker-compose

You might need to run these commands with `sudo` depending on your docker setup.

Navigate to the directory where you placed the files after filling them out:
```sh
cd /path/to/my/Download/folder/containing/FredBoat
```
and start everything with:
```sh
docker-compose up -d
```
You can see running docker containers on your machine with:
```sh
docker ps
```
This will also show stopped containers:
```sh
docker ps -a
```
FredBoat will put its log files into a folder called `logs` so you can access them to see if anything is wrong.

To stop everything, do this from inside the directory where you placed the FredBoat files and ran the initial docker-compose command:
```sh
docker-compose stop
```

Congratulations! Your FredBoat should be running now. If you haven't invited your bot to your guild yet, [visit this tutorial](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) to find out how to do it.



# Selfhost FredBoat from scratch
_FredBoat is written in Java, so it runs pretty much anywhere where you can install a Java Virtual Machine._


## Requirements

1. Java 8 **JRE**: [Oracle](https://www.java.com/en/download/) or [OpenJDK](http://openjdk.java.net/install/index.html)

2. [A PostgreSQL 10 Database](https://wiki.postgresql.org/wiki/Detailed_installation_guides). You will need to add the JDBC url of your PostgreSQL database to the credentials file.

3. A FredBoat.jar. Either [download it from our CI server](#ci-server) or [build it yourself](#build-the-fredboat-jar-from-source).


Got all those things together? [Click here](#config-and-credentials) to learn how to set up config and credentials files, then proceed with the instructions on how to run FredBoat.


## Run FredBoat

To run FredBoat you should set up a directory that looks like this:

![Directory](https://fred.moe/9Eu.png)


Once you are done configuring and collecting the necessary credentials, navigate to the directory `FredBoat.jar` is in:
```sh
cd /path/to/my/Download/folder/containing/FredBoat
```
and run it with:
```sh
java -jar -Xmx128m FredBoat.jar
```
Please note: Double clicking the jar won't work!


[Follow this link](/systemdservice) to find a tutorial on running FredBoat as a `systemd` service so that it starts and restarts automatically.


Congratulations! Your FredBoat should be running now. If you haven't invited your bot to your guild yet, [visit this tutorial](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) to find out how to do it.



# Config and Credentials

A sample `config.yaml` and an example `credentials.yaml` can be found on [our CI server](#ci-server).

In order to run FredBoat, you must first populate it with API credentials for Discord in the `credentials.yaml` file.

Music bot only: Fill in the Discord bot token for patron and a Youtube API key. Set *patron* to *true* in the `config.yaml` file and *development* to *false*. Fill in the Spotify tokens under the `Optional APIs` to be able to load Spotify playlists.

Full bot: Fill in the Discord bot token for beta, a Youtube API key and every other Optional API key too. Set *development* to *true* in the `config.yaml` file and *patron* to *false*.

Unless you are using docker-compose, make sure to add the JDBC url of your PostgreSQL database to the credentials file.



# Build the FredBoat jar from source
_I want the full open source experience_

## Requirements to build FredBoat from source

1. Java 8 **JDK**: [Oracle](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) or [OpenJDK](http://openjdk.java.net/install/index.html)

2. [Git](https://www.atlassian.com/git/tutorials/install-git)

3. [JDK added to your PATH](https://www.tutorialspoint.com/maven/maven_environment_setup.htm)


## Instructions to build FredBoat from source

Open Terminal or Command Prompt and `cd` to the directory where you wish to download the FredBoat repo to.

Clone the FredBoat GitHub repository and move into the newly created directory:

```sh
git clone https://github.com/Frederikam/FredBoat.git
cd FredBoat
```

If you want to run stable builds, switch to the stable branch:
```sh
git checkout stable
```

You can change back anytime to the development branch like this, just remember to compile again after switching:
```sh
git checkout dev
```


If you want to do any changes to FredBoat's code, this is the place and time to do them. Remember, after any changes you need to run the build again to compile a fresh jar file containing your changes.


Now compile FredBoat:

```sh
./gradlew build
```
or on Windows:
```sh
gradlew build
```

The compiled jar file can be found in `FredBoat/FredBoat/build/libs` and is called `FredBoat.jar`.



# CI server

There are two builds available:

Latest [Stable Build](https://ci.fredboat.com/viewLog.html?buildTypeId=FredBoat_Build&buildId=lastSuccessful&buildBranch=refs%2Fheads%2Fstable&tab=artifacts&guest=1)  

Latest [Development "I-like-living-on-the-edge" Build](https://ci.fredboat.com/viewLog.html?buildTypeId=FredBoat_Build&buildId=lastSuccessful&buildBranch=refs%2Fheads%2Fdev&tab=artifacts&guest=1)


If you are on a headless machine you can download the files from the CI server using `wget`, for example:  
Stable:
```sh
wget https://ci.fredboat.com/guestAuth/repository/download/FredBoat_Build/.lastSuccessful/docker-compose.yml?branch=refs/heads/stable -O docker-compose.yml

wget https://ci.fredboat.com/guestAuth/repository/download/FredBoat_Build/.lastSuccessful/config.yaml?branch=refs/heads/stable -O config.yaml

wget https://ci.fredboat.com/guestAuth/repository/download/FredBoat_Build/.lastSuccessful/credentials.yaml.example?branch=refs/heads/stable -O credentials.yaml

```

Dev:
```sh
wget https://ci.fredboat.com/guestAuth/repository/download/FredBoat_Build/.lastSuccessful/docker-compose.yml?branch=refs/heads/dev -O docker-compose.yml

wget https://ci.fredboat.com/guestAuth/repository/download/FredBoat_Build/.lastSuccessful/config.yaml?branch=refs/heads/dev -O config.yaml

wget https://ci.fredboat.com/guestAuth/repository/download/FredBoat_Build/.lastSuccessful/credentials.yaml.example?branch=refs/heads/dev -O credentials.yaml

```
