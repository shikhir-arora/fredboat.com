# Welcome to FredBoat Docs
FredBoat is a free Discord music bot that delivers high-quality music to your Discord server. FredBoat can be easily plugged into your Discord server with no configuration.


## Setting up the bot
FredBoat is made to be super simple to use! Getting FredBoat running on your server is easy. You can invite FredBoat by authenticating it with your account using [this](https://goo.gl/cFs5M9) link. Bear in mind that you must have `Manage Server` permissions to be able to do this.

# Music Commands

| Command                    | Description                                                           | Example usage & aliases                     |
|----------------------------|-----------------------------------------------------------------------|---------------------------------------------|
| ;;play ***url***           | Play music from the given URL. See supported sources below.           | ;;p https://www.youtube.com/watch?v=dQw4w9WgXcQ |
| ;;play ***words***         | Search for a track on youtube and soundcloud.                         | ;;p Never Gonna Give You Up                 |
| ;;queue                    | Display the queue of the current tracks in the playlist.              | ;;q                                         |
| ;;nowplaying               | Display the currently playing track.                                  | ;;np                                        |
| ;;skip                     | Remove the currently playing track from the queue. `;;help skip` to learn how to skip more than one track | ;;s     |
| ;;voteskip                 | Vote to skip the current track. Must have at least 50% of the votes.  | ;;v                                         |
| ;;stop                     | Stop the player and **clear** the playlist. Reserved for moderators.  | ;;st                                        |
| ;;pause                    | Pause the player.                                                     | ;;pause                                     |
| ;;resume                   | Resume the player.                                                    | ;;resume                                    |
| ;;join                     | Make FredBoat join your current voice channel.                        | ;;j                                         |
| ;;leave                    | Make FredBoat leave the current voice channel.                        | ;;lv                                        |
| ;;repeat                   | Change the repeat mode. Run this command for more info.               | ;;rep all                                   |
| ;;shuffle                  | Toggle shuffle mode.                                                  | ;;sh                                        |
| ;;reshuffle                | Reshuffle the queue.                                                  | ;;resh                                      |
| ;;fwd ***time***           | Forward the track by the given amount of time.                        | ;;fwd 2:30                                  |
| ;;rew ***time***           | Rewind the track by the given amount of time.                         | ;;rew 30                                    |
| ;;seek ***time***          | Set the position of the track to the given time.                      | ;;seek 2:45:00                              |
| ;;restart                  | Restart the currently playing track.                                  | ;;restart                                   |
| ;;history                  | Show history of recently played tracks.                               | ;;h                                         |
| ;;export                   | Export the current queue to hastebin.                                 | ;;ex                                        |
| ;;split ***youtube-url***  | Split a YouTube track into a tracklist based on its description.      | ;;split https://www.youtube.com/watch?v=8EdW28B-In4 |
| ;;volume                   | Set the volume ([FredBoatPatron](/docs/donate) only).                 | ;;vol 150                                   |
| ;;help ***command***       | Show advanced usage of a command                                      | ;;help skip                                 |


FredBoat will not be able to play tracks blocked in the US (usually due to copyright infringements on YouTube).

## Adding music to the playlist
Adding music to the playlist is pretty simple. To start playing a track, use the ;;play command. Here are two examples:
```
;;play https://www.youtube.com/watch?v=dQw4w9WgXcQ
;;play rick roll
```
You can either explicitly state the URL, or you can get FredBoat to search YouTube and give you some choices. Here's an example response:

```
Please select a track with the ';;play 1-5' command:
1: Rick Astley - Never Gonna Give You Up (03:33)
2: YOUTUBERS REACT TO RICKROLL (Ep. #5) (09:20)
3: I Rick Roll My Entire Chemistry Class! (05:55)
4: The New Rick Roll! (04:26)
5: Melania Trump's RNC RICKROLL (00:19)
```

You can then choose your track with `;;play <number>`, or just do`;;1` to select the first result, or `;;3` to select the third result, or even `;;4 1 3` to select more than one result.

**Supported sites:**

* YouTube 

* SoundCloud

* Bandcamp

* Twitch

* Vimeo

* Mixer

* [Hastebin](https://hastebin.com) & [Wastebin](https://wastebin.party) lists of links to tracks

* Spotify playlists (loaded through YouTube & SoundCloud, [FredBoatPatron](/docs/donate) only)

~~Direct links to files, including streams. Not all formats supported.~~¹

~~URLs pointing to .m3u and .pls can be used to start streams.~~¹

¹**Due to threats of (D)DoS attacks we have disabled files served over HTTP(S).**

Let us know if you want other sites supported. 

## Join FredBoat Hangout!
We invite everyone to join FredBoat hangout, which is a place to discuss suggestions and request for support. I'm very willing to take suggestions for the bot so don't hesitate to say what you have in mind! [Click here to join!](https://discord.gg/cgPFW4q)

## Support
Before you do anything, please [read our FAQ](https://fredboat.com/docs/faq).

You can join either our [Discord server](https://discord.gg/cgPFW4q) or tweet us at [@DiscordFredBoat](https://twitter.com/DiscordFredBoat).

## Legal
By using any of my hosted (but not selfhosted) bots you are subject to our (very minimal!) [terms of service](https://fredboat.com/docs/terms).

Effective as of 25-apr-2017.

## Credits
FredBoat is developed by Fre_d (aka Frederikam) with the help of contributors on GitHub.

Special thanks to EJ Technologies for providing us with open source licenses for their [Java profiler](https://www.ej-technologies.com/products/jprofiler/overview.html).

[![JProfiler](https://www.ej-technologies.com/images/product_banners/jprofiler_large.png)](https://www.ej-technologies.com/products/jprofiler/overview.html)

This site is hosted as an open source project on [Netlify](https://www.netlify.com/).

The FredBoat logo was created by Sturm/JDK\#0216.
