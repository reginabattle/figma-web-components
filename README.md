# Simple Design System (SDS) - Web Components

This repository contains standalone web components that replicate the Simple Design System (SDS) Figma library.

The components are built using native Light DOM web component architectures with design tokens, structured around standard **BEM (Block Element Modifier)** conventions, and have zero external dependencies.

---

## Project Structure

```
├── .storybook/          # Storybook configuration
├── components/          # Web component implementations
│   └── button/          # Button component
│       ├── sds-button.css   # Styles for the button
│       ├── sds-button.js      # Button element implementation
│       └── sds-button.stories.js # Storybook stories for the button
├── styles/              # Global styles
│   ├── tokens.css       # Core Design Tokens (Foundations)
│   └── demo.css         # Styles for the local demo page
├── index.html           # Native browser demo page
└── package.json         # Package configuration & scripts
```

---

## How to Run

### 1. View the Demo Page
You can preview the standard button component directly in your browser. Just open the root `index.html` file in any modern web browser to view the interactive demo board.

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

* **`<sds-button>`**: Standard text buttons supporting:
  * **Variants**: `primary`, `neutral`, `subtle`
  * **Sizes**: `medium`, `small`
  * **States**: Default, hover, active, focus-visible, and disabled
  * **Icons**: Support for optional start and/or end icon slots
