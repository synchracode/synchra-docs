---
title: Quotes
---

## Manage quotes

### `{quote.add}`

Adds a quote and returns:  
`Quote created with number: x`  
**Syntax:** `!<cmd> the quote here`

---

### `{quote.edit}`

Edits a quote and returns:  
`Quote updated`  
**Syntax:** `!<cmd> <number> the new quote here`

---

### `{quote.delete}`

Deletes a quote and returns:  
`Quote deleted`  
**Syntax:** `!<cmd> <number>`

---

## Display a quote

Using `!<cmd>` without a number returns a **random** quote.  
If a number is provided as the first argument, it returns that specific quote.

**Syntax:** `!<cmd> [number]`

### Full example command
**Command:** `!quote` 
**Response:**  
```
"{quote.message}" ({quote.date}, id: {quote.number}, by: {quote.user})
```

---

### `{quote.message}`

Returns the **quote message**.

---

### `{quote.number}`

Returns the **quote number**.

---

### `{quote.user}`

Returns the **user** who added the quote.

---

### `{quote.date}`

Returns the **date** when the quote was added.
