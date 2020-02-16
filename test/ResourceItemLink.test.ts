import { html, fixture, expect, waitUntil } from '@open-wc/testing';

import '../src/common/components/ResourceItemLink';

const timeout = 10000;
describe('ResourceItemLink', function() {
  this.timeout(timeout);
  it('it renders loading message', async () => {
    const el = await fixture(html`
      <sw-resource-item-link
        .resourceUrl=${'https://swapi.co/api/people/7/'}
        dataFieldName="name"
      />
    `);

    expect(el).shadowDom.to.equalSnapshot();
  });
  it('it renders error', async () => {
    const el: any = await fixture(html`
      <sw-resource-item-link .resourceUrl=${'https://123'} dataFieldName="title" />
    `);
    await waitUntil(() => !el.isLoading, 'element did not become ready');
    expect(el).shadowDom.to.equalSnapshot();
  });
  it('it renders correct data', async () => {
    const el: any = await fixture(html`
      <sw-resource-item-link
        .resourceUrl=${'https://swapi.co/api/people/7/'}
        dataFieldName="name"
      />
    `);
    await waitUntil(() => !el.isLoading, 'element did not become ready', {
      interval: 100,
      timeout,
    });
    expect(el).shadowDom.to.equalSnapshot();
  });
  it('it picks up data accordingly to given field name', async () => {
    const el: any = await fixture(html`
      <sw-resource-item-link .resourceUrl=${'https://swapi.co/api/films/3'} dataFieldName="title" />
    `);
    await waitUntil(() => !el.isLoading, 'element did not become ready', {
      interval: 100,
      timeout,
    });
    expect(el).shadowDom.to.equalSnapshot();
  });
});
