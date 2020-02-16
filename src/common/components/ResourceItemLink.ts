import { html } from 'lit-element';

import { API_BASE_URL } from '../utils';
import { IApiEntity } from '../interfaces';
import { DataLoader } from './DataLoader';

class ResourceItemLink extends DataLoader {
  dataFieldName: string;
  data: IApiEntity;

  static get properties() {
    return {
      ...DataLoader.properties,
      dataFieldName: { type: String },
    };
  }

  render() {
    if (this.isLoading)
      return html`
        <sw-loading />
      `;
    if (this.isError)
      return html`
        <sw-error />
      `;

    const href = this.data.url.replace(API_BASE_URL, '');
    const label = this.data[this.dataFieldName];
    return html`
      <a href=${href}>${label}</a>
    `;
  }
}

window.customElements.define('sw-resource-item-link', ResourceItemLink);
