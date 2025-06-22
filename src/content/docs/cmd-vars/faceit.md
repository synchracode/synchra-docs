---
title: Faceit
---
These variables let you display a user’s Faceit stats like level and ELO.

### Full Example Command

**Command:** `!faceit`  
**Response:**

    Faceit level: {faceit.level} ({faceit.elo} elo) – {faceit.next_level_points} elo needed for level {faceit.next_level}
    {faceit.username YourFaceitUsername}

---

### `{faceit.username [name]}`

Use this to tell the bot which Faceit user to look up.

- You can hardcode a username like this: `{faceit.username YourFaceitUsername}`

**Note:** This variable doesn't return anything on its own — it's just used to tell the bot who to look up.

**Example:**

    Faceit level: {faceit.level} ({faceit.elo} elo) {faceit.username YourFaceitUsername}`}

---

### `{faceit.elo}`

Shows the user's current Faceit ELO rating.

**Example:**

    ELO: {faceit.elo}

**Response:**  
`ELO: 1024`

---

### `{faceit.level}`

Shows the user's Faceit level (from 1 to 10).

**Example:**

    Level: {faceit.level}

**Response:**  
`Level: 6`

---

### `{faceit.next_level_points}`

Shows how many more ELO points the user needs to reach the next Faceit level.

**Example:**

    {faceit.next_level_points} ELO needed to reach level {faceit.next_level}

**Response:**  
`106 ELO needed to reach level 7`

---

### `{faceit.next_level}`

Shows the next Faceit level the user is working toward.

**Example:**

    Next level: {faceit.next_level}

**Response:**  
`Next level: 7`