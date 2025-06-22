---
title: General
sidebar:
    order: 2
---

## User Variables

### `{user}` – Mentioned User or First Argument

This variable refers to the user mentioned as the first argument when someone uses a command.

If no user is mentioned, it defaults to the person who triggered the command.

**Example:**

- **Command:** `!greet`
- **Response:** `Hello, {user}! Hope you're having a good day.`

**Usage:**

- If someone types `!greet ErlePerle`, the bot will respond with:  
  `Hello, ErlePerle! Hope you're having a good day.`

- If someone just types `!greet`, the bot will respond with:  
  `Hello, [their own name]! Hope you're having a good day.`

---

### `{sender}` – Command Sender

This variable always refers to the person who triggered the command, no matter what other input is given.

**Example:**

- **Command:** `!requestedby`
- **Response:** `This was requested by {sender}.`

**Usage:**

- If someone types `!requestedby`, the bot will respond with:  
  `This was requested by [SenderName].`

- If someone types `!requestedby AnotherUser`, it will still say:  
  `This was requested by [SenderName].`

