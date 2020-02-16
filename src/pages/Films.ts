import { html } from 'lit-element';

import { IFilm } from '../common/interfaces';
import { DataLoader } from '../common/components/DataLoader';
import { entityStyles } from '../common/styles';

export class Films extends DataLoader {
  static get styles() {
    return [entityStyles];
  }

  data: { results: [IFilm] };

  render() {
    if (this.isLoading)
      return html`
        <sw-loading />
      `;
    if (this.isError)
      return html`
        <sw-error />
      `;

    const films = this.data.results.sort(
      (a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime(),
    );
    return html`
      ${films.map(
        ({ title, release_date, characters, starships }) => html`
          <div class="entity">
            <h3>${title} <small>(${release_date})</small></h3>
            <div class="spec">
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
        `,
      )}
    `;
  }
}

window.customElements.define('sw-film-list', Films);
