---
title: Count
---

The count variable lets you and your chat keep track of a number that can be increased or decreased with commands.
Be it deaths, kills, rounds won, times a thing has been written in chat or anything else you can think of.

### `{count <counter_name>}`

Displays the current count.

**Command:** `!deaths`  
**Response:** `Streamer has died {count deaths} times.`

### `{count.inc <counter_name> [-/+amount]}`

Increases or decreases the count by the specified amount (default is 1).
You can use e.g. `-5` to decrease the count by 5.

**Command:** `!inc_deaths`  
**Response:** `Streamer has died {count.inc deaths 1} times :(`

### `{count.set <counter_name> [amount]}`

Sets the count to a specific amount. Use it for example to reset the count to 0.
The amount can also be specifed in the command itself.

**Command:** `!set_deaths`   
**Response:** `Death count set to {count.set deaths 0}.`

**Command:** `!set_deaths 10`   
**Response:** `Death count set to {count.set deaths 10}.`
