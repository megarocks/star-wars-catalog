import { html } from 'lit-element';

import { IFilm } from '../common/interfaces';
import { DataLoader } from '../common/components/DataLoader';

export class Films extends DataLoader {
  data: { results: [IFilm] };

  render() {
    if (this.isLoading)
      return html`
        loading...
      `;
    if (this.isError)
      return html`
        error.
      `;

    const films = this.data.results;
    return html`
      ${films.map(
        ({ title, release_date, characters, starships }) => html`
          <div>
            <h3>${title} <small>(${release_date})</small></h3>
            <div>
              <label>Characters:</label>
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
        `,
      )}
    `;
  }
}

window.customElements.define('sw-film-list', Films);
