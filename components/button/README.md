# SDS Button Components Documentation

The Simple Design System (SDS) provides two separate, lightweight custom element buttons built entirely inside the **Light DOM** for optimal performance, native form compatibility, and zero-build ease of use:

1. **`<sds-button>`**: Standard text button with solid text layout.
2. **`<sds-icon-button>`**: Circular button containing a centered Star icon.

---

## 1. Standard Button (`sds-button`)

Standard button supporting both text labels and inline icons.

### Attributes & API Reference

| Attribute | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | `"Button"` | The text label displayed inside the button. Fallback is the tag's inner text. |
| `variant` | `string` | `"primary"` | Button styling theme. Options: `"primary"`, `"neutral"`, `"subtle"`. |
| `size` | `string` | `"medium"` | Button padding and height scaling. Options: `"medium"`, `"small"`. |
| `disabled` | `boolean` | `false` | If present, disables the button and applies disabled state styling. |
| `icon-start`| `string` | `null` | Renders a Star icon on the left of the label when present. |
| `icon-end`  | `string` | `null` | Renders a Star icon on the right of the label when present. |

### Light DOM HTML Structure

```html
<sds-button label="Submit" variant="neutral" icon-start="star"></sds-button>
```

Renders as:
```html
<sds-button label="Submit" variant="neutral" icon-start="star">
  <button class="sds-button variant-neutral size-medium">
    <span class="sds-button-icon">
      <svg width="20" height="20" viewBox="0 0 15 15" fill="none">...</svg>
    </span>
    <span class="sds-button-label">Submit</span>
  </button>
</sds-button>
```

---

## 2. Icon Button (`sds-icon-button`)

Perfectly circular button containing a centered Star icon asset.

### Attributes & API Reference

| Attribute | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `string` | `"primary"` | Icon button theme. Options: `"primary"`, `"neutral"`, `"subtle"`. |
| `size` | `string` | `"medium"` | Button width and height scale. Options: `"medium"` (40px) or `"small"` (36px). |
| `disabled` | `boolean` | `false` | If present, disables the button and applies disabled state styling. |

### Light DOM HTML Structure

```html
<sds-icon-button variant="primary" size="small"></sds-icon-button>
```

Renders as:
```html
<sds-icon-button variant="primary" size="small">
  <button class="sds-icon-button variant-primary size-small">
    <span class="sds-icon-button-icon">
      <svg width="20" height="20" viewBox="0 0 15 15" fill="none">...</svg>
    </span>
  </button>
</sds-icon-button>
```

---

## Programmatic Interface

You can interact with both elements programmatically using standard JavaScript:

```javascript
const textBtn = document.querySelector('sds-button');
textBtn.label = "Apply Changes";
textBtn.variant = "subtle";

const iconBtn = document.querySelector('sds-icon-button');
iconBtn.size = "small";
iconBtn.disabled = true;
```
