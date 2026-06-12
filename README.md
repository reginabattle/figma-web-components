# Simple Design System (SDS) - Web Components

This repository contains standalone web components that replicate the Simple Design System (SDS) Figma library.

The components are built using native Light DOM web component architectures with premium design tokens, structured around standard **BEM (Block Element Modifier)** conventions, and have zero external dependencies.

---

## Project Structure

```
├── .storybook/          # Storybook configuration
├── components/          # Web component implementations
│   └── button/          # Button suite (Standard, Danger, Icon, Group)
│       ├── button.css   # Main styles for all buttons
│       ├── sds-button.js      # Standard and Danger button element
│       ├── sds-icon-button.js # Standalone icon button element
│       └── sds-button-group.js # Layout container for button groups
├── styles/              # Global styles
│   ├── tokens.css       # Core Design Tokens (Foundations)
│   └── demo.css         # Styles for the local demo page
├── index.html           # Native browser demo page
└── package.json         # Package configuration & scripts
```

---

## How to Run

### 1. View the Demo Page
You can preview the components directly in your browser. Just open the root `index.html` file in any modern web browser to view the interactive demo boards.

### 2. View in Storybook
To run the interactive Storybook environment and experiment with component attributes, run:

```bash
# Install dependencies
npm install

# Start Storybook local server
npm run storybook
```

This will spin up a development server at [http://localhost:6006](http://localhost:6006).

---

## Component Suite

* **`<sds-button>`**: Standard text buttons with Primary, Neutral, Subtle, Danger, and Danger Subtle variants.
* **`<sds-icon-button>`**: Standing icon buttons utilizing standard SVG icon vectors, built with specific circular aspect-ratios matching Figma variables.
* **`<sds-button-group>`**: Layout wrapper supporting flex-based button alignments (`start`, `center`, `end`, `justify`, `stack`) with fluid token gaps.
