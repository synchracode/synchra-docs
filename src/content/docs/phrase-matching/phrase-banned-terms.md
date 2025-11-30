---
title: Banned Terms
---
The system will automatically match smart variations of the text:
- Accents are removed (e.g. `hellö` becomes `hello`)
- Repeated letters are collapsed (`heeelllooo` becomes `hello`)
- Symbols are ignored (`he!!o` becomes `hello`)
- Leetspeak is matched (`1337` becomes `leet`)

## Normal Match

Just type the word or phrase normally, it will match many variations.

**Example**  
Pattern: `hello`  
Matches:
- `hello`
- `hellö`
- `he!!o`
- `h.e.l.l.o`

**Example**  
Pattern: `leet`  
Matches:
- `1337`
- `l33t`
- `leeeet!`
- `l.e.e.t`

## Exact Phrase Match (Quotes)

Use quotes to match phrases **in that exact order**, but still allowing for accents, symbols, and leetspeak.

**Example**  
Pattern: `"hello world"`  
Matches:
- `hello world`
- `hellö world`
- `he!!o world`
- `hello     woooorld`
- `1337 hello world`

Does not match:
- `world hello`

## Mixed Phrases

You can combine quoted phrases and other words.

**Example**  
Pattern: `this "hello world"`  
Matches: `this is a test with a hello world message`

## Regular Expressions (Advanced)

You can write a regular expression using `re:` at the start. This gives you full control over matching.

**Example**  
Pattern: `re:[a-z ]+`  
Matches: messages that are just lowercase letters and spaces.

## Summary

| Pattern you type     | Matches (with smart matching enabled)             |
| -------------------- | ------------------------------------------------- |
| `hello`              | `hello`, `he!!o`, `hellö`, `heeelllooo`, etc.     |
| `leet`               | `1337`, `l33t`, `leeeet!`, etc.                   |
| `"hello world"`      | The phrase, with or without accents or symbols    |
| `this "hello world"` | Must contain both words and the phrase            |
| `re:[a-z ]+`         | Regex for lowercase letters and spaces (advanced) |
