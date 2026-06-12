# SDS Button Component Documentation

The Simple Design System (SDS) provides a lightweight custom element button built entirely inside the **Light DOM** for optimal performance, native form compatibility, and zero-build ease of use:

- **`<sds-button>`**: Standard text button supporting both text labels and inline icons.

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

## Programmatic Interface

You can interact with the element programmatically using standard JavaScript:

```javascript
const textBtn = document.querySelector('sds-button');
textBtn.label = "Apply Changes";
textBtn.variant = "subtle";
textBtn.disabled = true;
```
