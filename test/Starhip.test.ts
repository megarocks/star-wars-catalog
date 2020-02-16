import { html, fixture, expect, waitUntil } from '@open-wc/testing';

import '../src/pages/Starship';

const timeout = 10000;
describe('Starship', function() {
  this.timeout(timeout);
  it('it renders loading message', async () => {
    const el = await fixture(html`
      <sw-starship-details .location=${{ pathname: 'https://swapi.co/api/starships/9/' }} />
    `);

    expect(el).shadowDom.to.equalSnapshot();
  });
  it('it renders error', async () => {
    const el: any = await fixture(html`
      <sw-starship-details .location=${{ pathname: 'https://777' }} />
    `);
    await waitUntil(() => !el.isLoading, 'element did not become ready');
    expect(el).shadowDom.to.equalSnapshot();
  });
  it('it renders correct data', async () => {
    const el: any = await fixture(html`
      <sw-starship-details .location=${{ pathname: 'https://swapi.co/api/starships/9/' }} />
    `);
    await waitUntil(() => !el.isLoading, 'element did not become ready', {
      interval: 100,
      timeout,
    });
    expect(el).shadowDom.to.equalSnapshot();
  });
});
