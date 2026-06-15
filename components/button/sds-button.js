class SdsButton extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'variant', 'size', 'disabled', 'icon-start', 'icon-end', 'href', 'target', 'type'];
  }

  constructor() {
    super();
    this._initialized = false;
  }

  connectedCallback() {
    if (!this._initialized) {
      this._setupDOM();
      this._initialized = true;
    }
    this.render();
    
    this.addEventListener('keydown', this._onKeyDown);
    this.addEventListener('click', this._onClick);
  }

  disconnectedCallback() {
    this.removeEventListener('keydown', this._onKeyDown);
    this.removeEventListener('click', this._onClick);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this._initialized && oldValue !== newValue) {
      this.render();
    }
  }

  /* Properties */
  get label() { return this.getAttribute('label'); }
  set label(val) { val ? this.setAttribute('label', val) : this.removeAttribute('label'); }

  get variant() { return this.getAttribute('variant') || 'primary'; }
  set variant(val) { this.setAttribute('variant', val || 'primary'); }

  get size() { return this.getAttribute('size') || 'medium'; }
  set size(val) { this.setAttribute('size', val || 'medium'); }

  get disabled() { return this.hasAttribute('disabled'); }
  set disabled(val) {
    if (val) {
      this.setAttribute('disabled', '');
      this.removeAttribute('tabindex'); // Skip button when using keyboard navigation
      this.setAttribute('aria-disabled', 'true');
    } else {
      this.removeAttribute('disabled');
      if (!this.hasAttribute('tabindex')) {
        this.setAttribute('tabindex', '0');
      }
      this.removeAttribute('aria-disabled');
    }
  }

  get iconStart() { return this.hasAttribute('icon-start'); }
  set iconStart(val) { val ? this.setAttribute('icon-start', '') : this.removeAttribute('icon-start'); }

  get iconEnd() { return this.hasAttribute('icon-end'); }
  set iconEnd(val) { val ? this.setAttribute('icon-end', '') : this.removeAttribute('icon-end'); }

  get href() { return this.getAttribute('href'); }
  set href(val) { val ? this.setAttribute('href', val) : this.removeAttribute('href'); }

  get target() { return this.getAttribute('target') || '_self'; }
  set target(val) { this.setAttribute('target', val || '_self'); }

  get type() { return this.getAttribute('type') || 'submit'; }
  set type(val) { this.setAttribute('type', val || 'submit'); }

  /* Build and update the button */
  _setupDOM() {
    // Use any text inside the tag if there is no label attribute
    const fallbackText = this.textContent.trim();

    // Create the text element for the button
    this._labelSpan = document.createElement('span');
    this._labelSpan.className = 'sds-button__label';
    this._labelSpan.textContent = this.label || fallbackText || '';

    this.innerHTML = ''; 
    this.appendChild(this._labelSpan);
  }

  render() {
    // Tell screen readers if this is a button or a link
    if (this.href) {
      this.setAttribute('role', 'link');
    } else {
      this.setAttribute('role', 'button');
    }

    if (!this.hasAttribute('tabindex') && !this.disabled) {
      this.setAttribute('tabindex', '0');
    }

    // Update style classes on the button
    const variant = this.variant;
    const size = this.size;
    this.className = `sds-button sds-button--${variant} sds-button--${size}`;

    // Update the button text
    if (this._labelSpan) {
      this._labelSpan.textContent = this.label || this._labelSpan.textContent || 'Button';
    }

    // Add or remove start/end icons if needed
    this._toggleIcon('icon-start', 'prepend');
    this._toggleIcon('icon-end', 'append');
  }

  _toggleIcon(attrName, position) {
    let icon = this.querySelector(`.sds-button__icon--${position}`);
    
    if (this.hasAttribute(attrName)) {
      if (!icon) {
        icon = document.createElement('span');
        icon.className = `sds-button__icon sds-button__icon--${position}`;
        icon.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.46669 0.8L9.52669 4.97333L14.1334 5.64667L10.8 8.89333L11.5867 13.48L7.46669 11.3133L3.34669 13.48L4.13336 8.89333L0.800023 5.64667L5.40669 4.97333L7.46669 0.8Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
        position === 'prepend' ? this.prepend(icon) : this.appendChild(icon);
      }
    } else if (icon) {
      icon.remove();
    }
  }

  /* Keyboard and click controls */
  _onKeyDown = (event) => {
    if (this.disabled) return;
    
    if (this.href) {
      // Let the Enter key click the link
      if (event.key === 'Enter') {
        event.preventDefault();
        this.click();
      }
    } else {
      // Let the Enter or Space key click the button
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        this.click();
      }
    }
  }

  _onClick = (event) => {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }

    if (this.href) {
      // Go to the link address if we have one
      if (this.target === '_blank') {
        window.open(this.href, '_blank');
      } else {
        window.location.href = this.href;
      }
    } else {
      // Submit the form if the button is inside a form
      const form = this.closest('form');
      if (form && this.type !== 'button') {
        const tempBtn = document.createElement('button');
        tempBtn.type = 'submit';
        tempBtn.style.display = 'none';
        form.appendChild(tempBtn);
        tempBtn.click();
        tempBtn.remove();
      }
    }
  }
}

customElements.define('sds-button', SdsButton);
