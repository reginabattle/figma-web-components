/* SDS Button Group - Custom Element (Light DOM Implementation) */

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
      this.render();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this._initialized && oldValue !== newValue) {
      this.render();
    }
  }

  /* Programmatic Getters and Setters */
  get align() {
    return this.getAttribute('align') || 'start';
  }

  set align(val) {
    this.setAttribute('align', val || 'start');
  }

  render() {
    const align = this.getAttribute('align') || 'start';
    
    // Check if the inner wrapper is already present to prevent duplicate wrapping
    let wrapper = this.querySelector('.button-group');
    if (!wrapper) {
      wrapper = document.createElement('div');
      wrapper.className = 'button-group';
      
      // Move all slotted children into the BEM-styled wrapper element
      while (this.firstChild) {
        wrapper.appendChild(this.firstChild);
      }
      this.appendChild(wrapper);
    }
    
    // Set standard class hierarchy for alignment BEM modifiers
    wrapper.className = `button-group button-group--align-${align}`;
  }
}

customElements.define('sds-button-group', SdsButtonGroup);
