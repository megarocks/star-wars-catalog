import { html } from 'lit-element';

import { IStarship } from '../common/interfaces';
import { DataLoader } from '../common/components/DataLoader';
import { entityStyles } from '../common/styles';

class Starship extends DataLoader {
  static get styles() {
    return [entityStyles];
  }

  data: IStarship;

  render() {
    if (this.isLoading)
      return html`
        <sw-loading />
      `;
    if (this.isError)
      return html`
        <sw-error />
      `;

    const { name, model, length, films } = this.data;
    return html`
      <h3>${name}</h3>
      <div><label>Model: </label><span>${model}</span></div>
      <div><label>Length: </label><span>${length}</span></div>
      <div>
        <label>Films:</label>
        <div>
          ${films.map(
            url =>
              html`
                <sw-resource-item-link .resourceUrl=${url} dataFieldName="title" />
              `,
          )}
        </div>
      </div>
    `;
  }
}

window.customElements.define('sw-starship-details', Starship);
