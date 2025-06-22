---
title: Sender
---

### `{sender}`

This variable always refers to the person who triggered the command, no matter what other input is given.

**Example:**

- **Command:** `!requestedby`
- **Response:** `This was requested by {sender}.`

**Usage:**

- If someone types `!requestedby`, the bot will respond with:  
  `This was requested by [SenderName].`

- If someone types `!requestedby AnotherUser`, it will still say:  
  `This was requested by [SenderName].`

