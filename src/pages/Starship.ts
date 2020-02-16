import { html } from 'lit-element';

import { IStarship } from '../common/interfaces';
import { DataLoader } from '../common/components/DataLoader';

class Starship extends DataLoader {
  data: IStarship;

  render() {
    if (this.isLoading)
      return html`
        loading...
      `;
    if (this.isError)
      return html`
        error.
      `;

    const { name, model, length, films } = this.data;
    return html`
      <div><label>Name: </label><span>${name}</span></div>
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
