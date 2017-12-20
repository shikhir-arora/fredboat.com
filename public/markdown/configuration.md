# Configuration
FredBoat supports a few options when it comes to customizing its behavior in your server. __You must have admin permissions to change any of these settings.__

## The ;;lang command
Want to use FredBoat in your native language? Server admins can set the language of FredBoat in their server. Say, for instance, I wanted to change the language to French:

```
;;lang fr_FR 
```

Run the `;;lang` command with no arguments to get a full list of supported languages. All translations are crowdsourced and we could really use some help bringing FredBoat to the world! [Click here to help](https://crowdin.com/project/fredboat).

## The ;;config command
This command allows you to change a couple server specific settings for the bot. Running the `;;config` command without args should show you something like this:

```
track_announce = false
auto_resume = false
```

If you want FredBoat to start announcing new tracks being played, you can enable that feature with:

```
;;config track_announce true
```

If you want to get the bot to unpause when someone joins the voice chat, you can change this setting:

```
;;config auto_resume true
```

## The ;;prefix command
This command allows changing and viewing the prefix. Running `;;prefix` without any args should show you something like this(output may vary based on language and prefix):

```
The prefix for this guild is ;;
You can show the prefix anytime again by mentioning me.
```

If you want to set a prefix, you may do so by running:

```
;;prefix <prefix>
```

If you wish for FredBoat to not necessitate a prefix for executing commands, you may do so by running:

```
;;prefix no_prefix
```

If you cannot remember or do not know the prefix for FredBoat in a server, just mentioning FredBoat will show you the prefix. Additionally you can mention FredBoat and follow that with a command to execute that command.

## Enabling/disabling automatic deletion of ;;play requests
If FredBoat has permission to 'Manage Messages' in the channel settings, it will automatically delete any valid ;;play requests.
If you prefer to keep the messages, you can just disable this bot's 'Manage Messages' permission. 

## Limiting access to text and voice channels
To restrict FredBoat from receiving commands from a certain text channel, simply revoke the bot's permission to "Send Messages" in that channel. Fredboat will only accept commands from a channel it can write to.
Likewise, if you do not want FredBoat to join certain voice channels, take away its permission to "Connect."
