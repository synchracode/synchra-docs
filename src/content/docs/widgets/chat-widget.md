---
title: Multi-chat Widget Styling
description: Customize the appearance of the Synchra Multi-chat Widget with CSS for your Twitch, YouTube, Kick and TikTok chat.
---

With Synchra's Multi-chat Widget you can very easily display your combined chat in OBS or anything else that supports a browser source. It supports Twitch, YouTube, TikTok and Kick.
You can customize it to your liking with simple settings and custom CSS in the [Dashboard](https://dash.synchra.net/).

## Custom CSS

The Chat Widget can be styled using custom CSS. You can target specific elements using the classes below and customize appearance.

### Available CSS Classes

| Class                          | Description                                     |
| ------------------------------ | ----------------------------------------------- |
| `.chat-message-container`      | Individual message container                    |
| `.chat-messages-container`     | Main container for all chat messages            |
| `.chat-container`              | Outer wrapper for chat messages                 |
| `.chat-message-text`           | The actual message text content                 |
| `.chat-message-username`       | Username display                                |
| `.chat-message-mention`        | @mentions within messages                       |
| `.chat-message-link`           | Links within messages                           |
| `.chat-message-timestamp`      | Message timestamp                               |
| `.chat-message-provider-logo`  | Platform logo (Twitch, YouTube, etc.)           |
| `.chat-message-meta-container` | Platform, Badges, Timestamp, username conatiner |

### CSS Variables

| Variable                   | Description             | Example           |
| -------------------------- | ----------------------- | ----------------- |
| `--text-color`             | Text color              | `#efeff0`         |
| `--border-radius`          | Corner roundness        | `8px`             |
| `--border-color`           | Border color            | `#333`            |
| `--border-width`           | Border thickness        | `2px`             |
| `--background-opacity`     | Background transparency | `0.8`             |
| `--background-color`       | Background color        | `#1a1a1a`         |
| `--text-shadow-color`      | Text shadow color       | `rgba(0,0,0,0.5)` |
| `--chat-widget-size-scale` | Size scaling factor     | `1`               |

### Example Usage

```css
.chat-message-container {
  padding: 1rem 1.25rem;
  border-radius: 12px;
  background: linear-gradient(145deg, #1a0736, #31176a);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5), inset 0 0 12px rgba(190, 150, 255, 0.25),
    inset 0 0 4px rgba(255, 255, 255, 0.1);
}
```

## Examples

### World of Warcraft like chat

```css
.chat-message-icons {
  display: none;
}

.chat-message-container span {
  color: var(--color-text) !important;
  font-weight: 500;
}

.chat-message-username::before {
  content: "[";
}

.chat-message-username::after {
  content: "] says";
}

.chat-message-container[data-badges~="subscriber"] span {
  color: #32bb37 !important;
}

.chat-message-container[data-badges~="subscriber"]
  .chat-message-username::before {
  content: "[Guild] [";
}

.chat-message-container[data-badges~="subscriber"]
  .chat-message-username::after {
  content: "]";
}

.chat-message-container[data-badges~="vip"] span {
  color: #7d77b3 !important;
}

.chat-message-container[data-badges~="vip"] .chat-message-username::before {
  content: "[Party] [";
}

.chat-message-container[data-badges~="vip"] .chat-message-username::after {
  content: "]";
}

.chat-message-container[data-badges~="moderator"] span {
  color: #d46728 !important;
}

.chat-message-container[data-badges~="moderator"]
  .chat-message-username::before {
  content: "[Raid Leader] [";
}

.chat-message-container[data-badges~="moderator"]
  .chat-message-username::after {
  content: "]";
}
```
