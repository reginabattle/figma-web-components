class SdsButtonGroup extends HTMLElement {
  static get observedAttributes() {
    return ['align'];
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

  /* Properties */
  get align() { return this.getAttribute('align') || 'start'; }
  set align(val) { this.setAttribute('align', val || 'start'); }

  render() {
    const align = this.align;
    // Set standard class hierarchy for alignment BEM modifiers on the host element
    this.className = `sds-button-group sds-button-group--align-${align}`;
  }
}

customElements.define('sds-button-group', SdsButtonGroup);
