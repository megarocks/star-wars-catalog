import { html, LitElement } from 'lit-element';
import { Router } from '@vaadin/router';

import './pages/Films';
import './pages/Film';
import './pages/Character';
import './pages/Starship';
import './common/components/ResourceItemLink';
import './common/components/Layout';
import './common/components/Loading';
import './common/components/Error';

export class StarWarsApp extends LitElement {
  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById('outlet'));
    router.setRoutes([
      {
        path: '/',
        component: 'sw-layout',
        children: [
          {
            path: '/films',
            children: [
              { path: '/', component: 'sw-film-list' },
              { path: '/:id', component: 'sw-film-details' },
            ],
          },
          { path: '/people/:id', component: 'sw-character-details' },
          { path: '/starships/:id', component: 'sw-starship-details' },
        ],
      },

      { path: '(.*)', redirect: '/films' },
    ]);
    if (['', '/'].includes(location.pathname)) Router.go('/films');
  }

  render() {
    return html`
      <div id="outlet" />
    `;
  }
}

if ('serviceWorker' in navigator) navigator.serviceWorker.register('/service-worker.js');
window.customElements.define('sw-app', StarWarsApp);
