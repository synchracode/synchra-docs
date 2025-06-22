---
title: Weather
---

## Full example command
**Command:** `!weather`  
**Response:**
```
It's currently {weather.temp}°C in {weather.city} with {weather.description} {weather.lookup_city Stockholm}
```

---

### `{weather.lookup_city <city>}`

Sets a default lookup city for the command.  
Useful when you want the command to always return weather for a specific location.

**Example usage:**  
`{weather.lookup_city Aarhus}`

**Returns:**  
An empty string (used only to set the location, not display it).

---

### `{weather.units metric}` or `{weather.units imperial}`

Sets the temperature unit system.

- `metric` for Celsius (default)  
- `imperial` for Fahrenheit

**Returns:**  
An empty string (used to change units, not to display them).

---

### `{weather.temp}`

Returns the current temperature.

**Example response:**  
`23`

---

### `{weather.temp_min}`

Returns the minimum temperature forecasted.

**Example response:**  
`17`

---

### `{weather.temp_max}`

Returns the maximum temperature forecasted.

**Example response:**  
`28`

---

### `{weather.description}`

Returns a short description of the current weather.

**Example response:**  
`light rain`

---

### `{weather.city}`

Returns the name of the city currently being looked up.

**Example response:**  
`Aarhus`

---

### `{weather.wind_speed}`

Returns the current wind speed.

**Example response:**  
`4.6`
