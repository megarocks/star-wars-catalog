import { html } from 'lit-element';

import { ICharacter } from '../common/interfaces';
import { DataLoader } from '../common/components/DataLoader';
import { entityStyles } from '../common/styles';

class Character extends DataLoader {
  static get styles() {
    return [entityStyles];
  }

  data: ICharacter;

  render() {
    if (this.isLoading)
      return html`
        <sw-loading />
      `;
    if (this.isError)
      return html`
        <sw-error />
      `;

    const { name, height, gender, films } = this.data;
    return html`
      <div class="entity">
        <h3>${name}</h3>
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
      </div>
    `;
  }
}

window.customElements.define('sw-character-details', Character);
