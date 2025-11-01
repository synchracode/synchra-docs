---
title: Commands / Timers
---
Use this to create commands that trigger when someone types a matching phrase in chat.

Matching is **exact**. There is no automatic handling of symbols, leetspeak, or repeated letters. You must write the pattern exactly how someone would type it in chat.

## Exact Match

Type the exact phrase you want to match.

**Example**  
Pattern: `hello world`  
Matches: `hello world`  
Does not match: `hello! world`, `Hello World`, `hellö world`, `heelllooo`

## Exact Phrase Match (Quotes)

Use quotes to match a phrase in that exact order.

**Example**  
Pattern: `"hello world"`  
Matches:
- `this is a test with a hello world that should match`
- `a hello world`

Does not match:
- `world hello`
- `this hello cruel world`

Quotes mean the phrase must appear **in order**, but it does not have to be the whole message.

## Mixed Phrases

You can combine quoted phrases and other words.

**Example**  
Pattern: `run "the command"`  
Matches: `can you run the command please`

## Regular Expressions (Advanced)

You can use regular expressions if you need advanced patterns. Start the pattern with `re:`.

**Example**  
Pattern: `re:^hello [a-z]+$`  
Matches: messages that start with "hello" followed by a word in lowercase letters.

## Summary

| Pattern you type         | Matches when the message contains                     |
|--------------------------|--------------------------------------------------------|
| `test123`                | Exactly "test123"                                      |
| `"hello world"`          | The phrase "hello world" in that order                |
| `run "the command"`      | Both "run" and "the command" in one message            |
| `re:^hello [a-z]+$`      | Regex matching "hello something" (advanced use only)   |