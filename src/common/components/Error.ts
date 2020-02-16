import { html, LitElement } from 'lit-element';

class Error extends LitElement {
  render() {
    return html`
      error.
    `;
  }
}

window.customElements.define('sw-error', Error);
