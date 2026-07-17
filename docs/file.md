---
sidebar_position: 3
title: File Management Guide
description: Learn how to work with files in SandboxCode projects
---

# File Management Guide

This guide explains how to manage and organize files in your SandboxCode documentation.

## File Organization

The project uses a standard structure for documentation and assets:

```
docs/
├── intro.md           # Introduction
├── getting-started.md # Getting Started
└── file.md            # File Management (this file)

public/
├── main.js            # Frontend scripts
└── style.css          # Stylesheets

src/
├── pages/
│   ├── index.js       # Homepage
│   └── dashboard.js   # Dashboard
└── css/
    └── custom.css     # Custom styles
```

## Adding Documentation

### Create a New Markdown File

1. Add a new `.md` file in the `docs/` directory
2. Include frontmatter at the top:

```md
---
sidebar_position: 2
title: Your Page Title
description: Page description for SEO
---

# Your Page Title

Content goes here...
```

### Sidebar Configuration

Update `sidebars.js` to add your page to the navigation:

```js
module.exports = {
  tutorialSidebar: [
    'intro',
    'getting-started',
    'file', // Your new page
  ],
};
```

## Markdown Features

Docusaurus supports:

- **Headings**: Use `#`, `##`, `###`, etc.
- **Lists**: Both ordered and unordered
- **Code blocks**: Wrap in triple backticks with language
- **Links**: `[text](url)` or `[internal link](/docs/intro)`
- **Images**: `![alt text](image.jpg)`
- **Tables**: Standard markdown tables

## Best Practices

1. **Keep files organized** — Group related documents in subdirectories
2. **Use clear titles** — Descriptive page titles help with navigation
3. **Link internally** — Cross-link related documentation pages
4. **Add descriptions** — SEO descriptions improve search visibility
5. **Review markdown** — Ensure links work before deploying
