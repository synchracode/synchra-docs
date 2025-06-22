---
title: User
---

### `{user}`

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
