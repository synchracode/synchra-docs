---
title: Command Variable Usage
sidebar:
  order: 1
---

When you create a custom command, you can include variables in the response to make it dynamic and more useful. Variables are special placeholders that the bot replaces with live information when the command is used.

## How to Use Variables

Variables are written like this: `{variable_name}`  
Some variables can also take options or extra input, like this: `{variable_name input}`

When someone triggers the command, the bot will replace the variable with the correct value automatically.

---

## Example Variables

| Variable                             | Description                                            | Example                                                        |
| ------------------------------------ | ------------------------------------------------------ | -------------------------------------------------------------- |
| `{accountage}`                       | Shows how old the user's account is.                   | `Account created {accountage} ago.`                            |
| `{countdown 2025-07-01T18:00:00+02}` | Shows how much time is left until a date/time.         | `Only {countdown 2025-07-01T18:00:00+02} until the big event!` |
| `{spotify.song_name}`                | Shows the name of the current song playing on Spotify. | `Now playing: {spotify.song_name}`                             |

---

## Example Command

**Command:** `!countdown`  
**Response:** `The event starts in {countdown 2025-07-01T18:00:00+02}`

When someone types `!countdown`, the bot replies with how much time is left until the event.
