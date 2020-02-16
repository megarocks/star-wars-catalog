import { html, LitElement } from 'lit-element';
import { Router } from '@vaadin/router';

import './pages/Films';
import './pages/Film';
import './pages/Character';
import './pages/Starship';
import './common/components/ResourceItemLink';

export class StarWarsApp extends LitElement {
  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById('outlet'));
    router.setRoutes([
      {
        path: '/films',
        children: [
          { path: '/', component: 'sw-film-list' },
          { path: '/:id', component: 'sw-film-details' },
        ],
      },
      { path: '/people/:id', component: 'sw-character-details' },
      { path: '/starships/:id', component: 'sw-starship-details' },
      { path: '(.*)', redirect: '/films' },
    ]);
  }

  render() {
    return html`
      <div id="outlet" />
    `;
  }
}

navigator.serviceWorker.register('/service-worker.js');
window.customElements.define('sw-app', StarWarsApp);
