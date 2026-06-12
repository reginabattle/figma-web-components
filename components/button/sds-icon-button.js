/* SDS Icon Button - Custom Element (Light DOM Implementation) */

class SdsIconButton extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'size', 'disabled', 'icon'];
  }

  constructor() {
    super();
    this._initialized = false;
  }

  connectedCallback() {
    if (!this._initialized) {
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

  get icon() {
    return this.getAttribute('icon') || 'star';
  }

  set icon(val) {
    this.setAttribute('icon', val || 'star');
  }

  render() {
    const variant = this.getAttribute('variant') || 'primary';
    const size = this.getAttribute('size') || 'medium';
    const isDisabled = this.hasAttribute('disabled');

    // Create the native inner button
    const button = document.createElement('button');
    
    // Assign BEM classes: block name is 'button' and modifiers are applied
    button.className = `button button--icon-only button--${variant} button--${size}`;
    if (isDisabled) {
      button.disabled = true;
    }

    // Render standard Star SVG icon inside an icon container span
    const iconSpan = document.createElement('span');
    iconSpan.className = 'button__icon';
    iconSpan.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.46669 0.8L9.52669 4.97333L14.1334 5.64667L10.8 8.89333L11.5867 13.48L7.46669 11.3133L3.34669 13.48L4.13336 8.89333L0.800023 5.64667L5.40669 4.97333L7.46669 0.8Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    button.appendChild(iconSpan);

    // Safely update DOM
    this.innerHTML = '';
    this.appendChild(button);
  }
}

customElements.define('sds-icon-button', SdsIconButton);
