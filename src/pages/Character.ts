import { html } from 'lit-element';

import { ICharacter } from '../common/interfaces';
import { DataLoader } from '../common/components/DataLoader';

class Character extends DataLoader {
  data: ICharacter;

  render() {
    if (this.isLoading)
      return html`
        loading...
      `;
    if (this.isError)
      return html`
        error.
      `;

    const { name, height, gender, films } = this.data;
    return html`
      <div><label>Name: </label><span>${name}</span></div>
      <div><label>Gender: </label><span>${gender}</span></div>
      <div><label>Height: </label><span>${height}</span></div>
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

window.customElements.define('sw-character-details', Character);
