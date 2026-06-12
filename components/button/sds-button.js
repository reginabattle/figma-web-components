/* SDS Button - Custom Element (Light DOM Implementation) */

class SdsButton extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'variant', 'size', 'disabled', 'icon-start', 'icon-end'];
  }

  constructor() {
    super();
    this._initialized = false;
    this._initialLabel = '';
  }

  connectedCallback() {
    if (!this._initialized) {
      // Capture initial text content to use as a fallback label
      this._initialLabel = this.textContent.trim();
      this._initialized = true;
    }
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this._initialized && oldValue !== newValue) {
      this.render();
    }
  }

  /* Programmatic Getters and Setters */
  get label() {
    return this.getAttribute('label');
  }

  set label(val) {
    if (val === null || val === undefined) {
      this.removeAttribute('label');
    } else {
      this.setAttribute('label', val);
    }
  }

  get variant() {
    return this.getAttribute('variant') || 'primary';
  }

  set variant(val) {
    this.setAttribute('variant', val || 'primary');
  }

  get size() {
    return this.getAttribute('size') || 'medium';
  }

  set size(val) {
    this.setAttribute('size', val || 'medium');
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(val) {
    if (val) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  get iconStart() {
    return this.getAttribute('icon-start');
  }

  set iconStart(val) {
    if (val === null || val === undefined) {
      this.removeAttribute('icon-start');
    } else {
      this.setAttribute('icon-start', val);
    }
  }

  get iconEnd() {
    return this.getAttribute('icon-end');
  }

  set iconEnd(val) {
    if (val === null || val === undefined) {
      this.removeAttribute('icon-end');
    } else {
      this.setAttribute('icon-end', val);
    }
  }

  render() {
    const labelText = this.getAttribute('label') || this._initialLabel || 'Button';
    const variant = this.getAttribute('variant') || 'primary';
    const size = this.getAttribute('size') || 'medium';
    const isDisabled = this.hasAttribute('disabled');
    const iconStart = this.getAttribute('icon-start');
    const iconEnd = this.getAttribute('icon-end');

    // Create the native inner button
    const button = document.createElement('button');
    
    // Set standard class hierarchy for pure CSS styling targeting using BEM
    button.className = `button button--${variant} button--${size}`;
    if (isDisabled) {
      button.disabled = true;
    }

    // Helper to generate Star SVG icon
    const createIconEl = () => {
      const iconSpan = document.createElement('span');
      iconSpan.className = 'button__icon';
      iconSpan.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.46669 0.8L9.52669 4.97333L14.1334 5.64667L10.8 8.89333L11.5867 13.48L7.46669 11.3133L3.34669 13.48L4.13336 8.89333L0.800023 5.64667L5.40669 4.97333L7.46669 0.8Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
      return iconSpan;
    };

    // Append start icon if present
    if (iconStart !== null) {
      button.appendChild(createIconEl());
    }

    // Render the text label
    const labelSpan = document.createElement('span');
    labelSpan.className = 'button__label';
    labelSpan.textContent = labelText;
    button.appendChild(labelSpan);

    // Append end icon if present
    if (iconEnd !== null) {
      button.appendChild(createIconEl());
    }

    // Safely update DOM in a light DOM architecture
    this.innerHTML = '';
    this.appendChild(button);
  }
}

customElements.define('sds-button', SdsButton);
