---
title: Chat Widget
---

## Custom CSS

The Chat Widget can be styled using custom CSS. You can target specific elements using the classes below and customize appearance.

### Available CSS Classes

| Class | Description |
|-------|-------------|
| `.chat-message-container` | Individual message container |
| `.chat-messages-container` | Main container for all chat messages |
| `.chat-messages-inner-container` | Inner wrapper for chat messages |
| `.chat-message-text` | The actual message text content |
| `.chat-message-username` | Username display |
| `.chat-message-mention` | @mentions within messages |
| `.chat-message-link` | Links within messages |
| `.chat-message-timestamp` | Message timestamp |
| `.chat-message-provider-logo` | Platform logo (Twitch, YouTube, etc.) |
| `.chat-message-meta-container` | Platform, Badges, Timestamp, username - container |

### CSS Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `--border-radius` | Corner roundness | `8px` |
| `--border-color` | Border color | `#333` |
| `--border-width` | Border thickness | `2px` |
| `--background-opacity` | Background transparency | `0.8` |
| `--background-color` | Background color | `#1a1a1a` |
| `--text-shadow-color` | Text shadow color | `rgba(0,0,0,0.5)` |

### Example Usage

```css
.chat-message-container {
    padding: 1rem 1.25rem;
    border-radius: 12px;
    background: linear-gradient(145deg, #1a0736, #31176a);
    box-shadow:
        0 4px 12px rgba(0, 0, 0, 0.5),
        inset 0 0 12px rgba(190, 150, 255, 0.25),
        inset 0 0 4px rgba(255, 255, 255, 0.1);
}
```