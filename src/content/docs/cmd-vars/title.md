---
title: Title
---

### `{title}`

Returns the stream's current title.

**Example response:**  
`My awesome title`

---

### `{set_title}`

Lets users change the stream title by passing in text after the command.

**Example command:**  
`!settitle An even better title`  
**Example response:**  
`Title changed to: {set_title}`

---

### `{set_title An even better title}`

Sets a specific title directly in the command without user input.

**Example command:**  
`!settitletest`  
**Example response:**  
`Title changed to: {set_title An even better title}`
