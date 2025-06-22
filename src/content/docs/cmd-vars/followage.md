---
title: Followage
---
These variables show how long someone has been following or the exact follow date and time.

> **How it works:**  
> If the command is used without mentioning a user (e.g. `!followage`), it will show the info for the person who sent the message.  
> If a username is provided as the first argument (e.g. `!followage SomeUser`), it will show the info for that user instead.

---

### `{followage}`  
Displays the full duration since the user started following, in years, months, days, and hours.

**Example response:**  
`5 years 8 months 13 days 2 hours`

---

### `{followage_date}`  
Shows the date when the user started following (in `YYYY-MM-DD` format).

**Example response:**  
`2013-06-03`

---

### `{followage_datetime}`  
Shows the full date and time when the user started following (in UTC).

**Example response:**  
`2013-06-03 19:12:02 UTC`
