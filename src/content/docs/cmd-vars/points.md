---
title: Points
---

---

### `{points_name}`
Returns the name of the points used in the system.  
**Example response:**  
`DXP`

---

### `{points}`
Returns the amount of points a user currently has.  
**Example response:**  
`150`

---

### `{points_rank}`
Returns the user’s current rank on the points leaderboard.  
**Example response:**  
`2`

---

### `{total_point_users}`
Returns how many users are currently on the points leaderboard.  
**Example response:**  
`5003`

---

### `{points_ranking}`
Returns the top 5 users on the points leaderboard.  
**Example response:**  

    1. John - 300 DXP
    2. Alice - 290 DXP
    3. Bob - 280 DXP
    4. Eve - 270 DXP
    5. Carol - 260 DXP

---

### `{give_points}`
Allows one user to give points to another user.  
Returns a message showing who gave points to whom.

**Example response:**  
`JohnDoe gave 50 DXP to JaneDoe.`

---

### `{add_points}`
Allows an admin (or authorized user) to add points to a user from an unlimited pool.  
Returns a message confirming the points were added to the user.

**Example response:**  
`JaneDoe now has 150 DXP.`
