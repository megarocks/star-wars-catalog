import { css, html, LitElement } from 'lit-element';

class Layout extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 960px;
        margin: 0 auto;
      }
      nav {
        line-height: 3rem;
      }
    `;
  }
  render() {
    return html`
      <div class="container">
        <nav>
          <a href="/films">All Films</a>
        </nav>
        <main>
          <slot />
        </main>
      </div>
    `;
  }
}

window.customElements.define('sw-layout', Layout);
