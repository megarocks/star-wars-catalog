import { html } from 'lit-element';

import { IFilm } from '../common/interfaces';
import { DataLoader } from '../common/components/DataLoader';

class Film extends DataLoader {
  data: IFilm;

  render() {
    if (this.isLoading)
      return html`
        loading...
      `;
    if (this.isError)
      return html`
        error.
      `;

    const { title, release_date, characters, starships } = this.data;
    return html`
      <div>
        <h3>${title} <small>(${release_date})</small></h3>
        <div>
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
        <div>
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
