import { html } from 'lit-element';

import { IFilm } from '../common/interfaces';
import { DataLoader } from '../common/components/DataLoader';
import { entityStyles } from '../common/styles';

class Film extends DataLoader {
  static get styles() {
    return [entityStyles];
  }

  data: IFilm;

  render() {
    if (this.isLoading)
      return html`
        <sw-loading />
      `;
    if (this.isError)
      return html`
        <sw-error />
      `;

    const { title, release_date, characters, starships } = this.data;
    return html`
      <div class="entity">
        <h3>${title} <small>(${release_date})</small></h3>
        <div class="spec">
          <label>Characters: </label>
          <div>
            ${characters.map(
              url =>
                html`
                  <sw-resource-item-link .resourceUrl=${url} dataFieldName="name" />
                `,
            )}
          </div>
        </div>
        <div class="spec">
          <label>Starships:</label>
          <div>
            ${starships.map(
              url =>
                html`
                  <sw-resource-item-link .resourceUrl=${url} dataFieldName="name" />
                `,
            )}
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('sw-film-details', Film);
