# Selfhosting FredBoat

* * *

**Disclaimer**: This guide is a highly community-driven effort, and as such is always subject to change -- sometimes breaking. If you have carefully read through this guide and find trouble, check the #selfhosters channel in the [FredBoat Hangout](https://discord.gg/cgPFW4q) server and someone from the community may be able to help. As always, pull requests are welcome [here]( https://github.com/FredBoat/fredboat.com/blob/master/public/markdown/selfhosting.md). A best effort is made to keep this guide up-to-date, but there are no specific guarantees.

* * *

This is a tutorial for users who would like to host their own FredBoat instance. Please bear in mind that this is not a requirement for using the FredBoat service as there is a [public FredBoat♪♪](https://goo.gl/cFs5M9) hosted and provided that is simple to use.

**This tutorial is for advanced users. If you can't figure out how to run this, please use the [public FredBoat♪♪](https://goo.gl/cFs5M9)**

As the first part of word *self*hosting implies, this is all about doing things your*self*. If you love tinkering around with things and can use your preferred search engine to resolve 95% of the issues you run into by your*self*, then this guide is definitely for you and we welcome you to join us in the #selfhosters channel on [FredBoat Hangout](https://discord.gg/cgPFW4q) for those last tricky 5% of questions.


Having that out of the way, let's dive right in!


## General notes

FredBoat runs preferably on an x86_64/AMD64 CPU. Strange things may happen if you try running FredBoat on an ARM CPU like on a Raspberry Pi. If you have no idea what this means, you're probably doing it right and don't have to worry.

FredBoat requires a PostgreSQL database to run. The easiest way to achieve that is by using the docker part of this tutorial.

Whenever editing any files, use a proper text editor (like [Sublime](http://www.sublimetext.com/)) and keep the rules for YAML files in mind: never use tabs, always spaces, indentation is important.


## Selfhost with Docker and Docker Compose **(Strongly Recommended)**

**Why is this the recommended way to selfhost FredBoat?**  
- Docker works on almost any architecture and platform out there in the same way - be it Windows, Mac OS, tons of Linux distros or even your spare Raspberry Pi.
- You don't have to install Java or any build tools like Git or Gradle, and copy paste obscure commands to have them spit out a jar, because our [CI server](https://ci.fredboat.com) builds the jar for you and publishes an official FredBoat docker image to the [official docker hub](https://hub.docker.com/r/fredboat/fredboat/).
- **FredBoat has grown over the years.** Although running the bot with a single jar was possible in the past, it has become increasingly more complex as FredBoat requires a backend database (like PostgreSQL), and many parts  of the bot are separated into other modules, such as [the backend](https://github.com/FredBoat/Backend). FredBoat's structure changes over time play an important role for a bot of this magnitude. However, Docker (with [Docker Compose](https://docs.docker.com/compose/install/)) makes this process fairly straightforward. It is important to note that reading the instructions is more important than ever, as syntax and other small portions of the configuration may affect the bot in many ways. 
- Per the above, FredBoat now uses a *singular* configuration file for its main config: `fredboat.yaml`, and a single file to configure the backend database: `quarterdeck.yaml` -- building the project and making sure everything stays up and connected can be a challenge building from source, but Docker/Docker Compose allow one-click setup by configuring a `docker-compose.yml` file which manages the setup of the project, starts optional automatic updates and watchdog, and ensures that the proper files are pulled right from the [CI server](https://ci.fredboat.com). Furthermore, there is **less configuration** needed when using Docker/Docker Compose due to the fact that FredBoat will have default values set to look for the Docker config. This is why it is strongly pushed - it's a simpler, better solution for FredBoat.
- FredBoat is constantly evolving; there are many parts of the project that are modular. By using Docker, you can ensure you are *much* better off when it comes to future breaking changes, which any selfhoster should expect to encounter once in a while.
- You can easily configure automated updates using an additional, optional 3rd party docker image called [Watchtower](https://github.com/v2tec/watchtower).
- All containers will automatically be started when the machine you are using to host FredBoat reboots / starts.


### Requirements

1. [Docker Community Edition](https://docs.docker.com/engine/installation/)

2. [Docker Compose](https://docs.docker.com/compose/install/)

3. A folder containing the following files:
- `docker-compose.yml`
- `fredboat.yaml` (Rename the `fredboat.example.yaml` file once edited)
- `quarterdeck.yaml` (Rename the `quarterdeck.example.yaml` file  once edited)


You can get the files from [our CI server](#ci-server).

Should look like this:

[![Folder with files](https://fred.moe/Ig_.png)](https://fred.moe/Ig_.png)  

or this in the command line:  

[![Folder with files from command line](https://fred.moe/hMz.png)](https://fred.moe/hMz.png)

It is critical that you carefully read each of those files carefully top to bottom, as they explain all required and a few advanced options to run your FredBoat, and fill them out accordingly.

- The `docker-compose.yml` explains some Windows platform specific configuration for the database, how to configure FredBoat builds, and how to enable automatic updates, as well as the setup for fetching the proper backend.

- The `fredboat.yaml` file holds the master setup for FredBoat and tells you what tokens and codes and passwords are needed, which are optional, and where to get them, shows the settings to configure the backend database connection, logging options, and various important setup criteria. This single file replaces the old `credentials.yaml` and `config.yaml` files.

- The `quarterdeck.yaml` file holds the configuration options for the backend (Quarterdeck) database. The basic credentials setup here are used in `fredboat.yaml` and must match.


Make sure to rename `fredboat.example.yaml` and `quarterdeck.example.yaml` to `fredboat.yaml` and `quarterdeck.yaml` respectively before starting FredBoat.

Got all those things together? [Click here](#config-and-credentials) to learn how to set up config and credentials files, then proceed with the instructions on how to run FredBoat with docker-compose.


### Run FredBoat with docker-compose 

You might need to run these commands with `sudo` depending on your docker setup.

Navigate to the directory where you placed the files after filling them out:
```sh
cd /path/to/my/Download/folder/containing/FredBoat
```
and start everything with:
```sh
docker-compose up -d
```
_Please note: During the first start, the database container requires additional time to be fully set up and, depending on the specs of your machine as well as whether your latest sacrifices have appeased the Docker gods, might not be ready immediately, resulting in the FredBoat container restarting a few times or even exiting. Run the above command a (few) additional times in that case_

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


## Config and Credentials

A sample `fredboat.yaml` and an example `quarterdeck.yaml` can be found on [our CI server](#ci-server).

You need to read and edit both files according to your preferences. Occasionally new values are added and old ones replaced or discontinued. Check back regularly for updates of those files.

In order to run FredBoat, you must populate the `fredboat.yaml` file with a bot token for Discord and a Youtube API key. More stuff, for example Spotify, can be enabled by filling out the corresponding credentials under `Optional APIs` in the `fredboat.yaml` file. Furthermore, it is critical you follow the instructions to setup the backend credentials, matching those from `quarterdeck.yaml` with the cooresponding fields in `fredboat.yaml`, which is the central file for the bot. 

### Manual Installation 

FredBoat aims to still be compilable easily through Gradle, and the generated jar's (`FredBoat.jar`, `QuarterDeck.jar`, etc.) can be built manually. 

Note that the links to the latest **compiled** QuarterDeck and FredBoat builds are contained below under [CI Server](#ci-server). 

**This method is not recommended unless you wish to edit the source, or are an advanced user who knows what he/she are doing!**

First, make sure you have the following:

1. Java 10 **JDK**: [Oracle](http://www.oracle.com/technetwork/java/javase/downloads/jdk10-downloads-4416644.html) or [OpenJDK](http://jdk.java.net/10/)
 
2. [Git](https://www.atlassian.com/git/tutorials/install-git)
 
3. [JDK added to your PATH](https://www.tutorialspoint.com/maven/maven_environment_setup.htm)

- Clone the project repo:

```sh
git clone https://github.com/Frederikam/FredBoat.git
cd FredBoat
```
- Checkout to the `dev` branch, which is the current working branch:

```sh
git checkout dev
```

*If you want to do any changes to FredBoat's code, this is the place and time to do them. Remember, after any changes you need to run the build again to compile a fresh jar file containing your changes.*


- From inside the `FredBoat` folder downloaded from GitHub, you can now compile FredBoat using Gradle:


```sh
./gradlew build
```
or on Windows:
```sh
gradlew build
```

The compiled jar file can be found in `FredBoat/FredBoat/build/libs` and is called `FredBoat.jar`. A similar process goes for the [QuarterDeck Backend](https://github.com/FredBoat/Backend), but as stated on the Backend README, Docker is required there.



### CI Server

**If you are following the Docker install (as you should be!), the `FredBoat.jar` and `QuarterDeck.jar` files are handled automatically. The following two manual downloads are _not required_ for Docker builds.**

Latest [Development Build](https://ci.fredboat.com/viewLog.html?buildTypeId=FredBoat_Build&buildId=lastSuccessful&buildBranch=refs%2Fheads%2Fdev&tab=artifacts&guest=1)

Latest [QuarterDeck Backend](https://ci.fredboat.com/viewLog.html?buildTypeId=Quarterdeck_Build&buildId=lastSuccessful&buildBranch=refs%2Fheads%2Fdev&tab=artifacts&guest=1) 

If you are on a headless machine you can download the files from the CI server using `wget`, for example: 

Dev (links for `docker-compose.yml`, `fredboat.example.yaml`, and `quarterdeck.example.yaml`) -

```sh
wget https://ci.fredboat.com/guestAuth/repository/download/FredBoat_Build/.lastSuccessful/docker-compose.yml?branch=refs/heads/dev -O docker-compose.yml

wget https://ci.fredboat.com/guestAuth/repository/download/FredBoat_Build/.lastSuccessful/fredboat.example.yaml?branch=refs/heads/dev -O fredboat.example.yaml

wget https://ci.fredboat.com/guestAuth/repository/download/QuarterDeck_Build/.lastSuccessful/quarterdeck.example.yaml?branch=refs/heads/dev -O quarterdeck.example.yaml
```


## Bot Administration
As a selfhoster, you and your configured bot admins have access to additional administrative commands, which you can find through
```
;;commands admin
```
