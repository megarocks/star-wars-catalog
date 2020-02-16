import { LitElement } from 'lit-element';

import { apiCall } from '../utils';
import { IApiEntity, ICharacter, IFilm, IStarship } from '../interfaces';

export class DataLoader extends LitElement {
  resourceUrl: string;
  isLoading: boolean;
  isError: boolean;
  data: ICharacter | IFilm | { results: [IFilm] } | IApiEntity | IStarship;
  location: {
    [key: string]: any;
    pathname: string;
  };

  static get properties() {
    return {
      data: { type: Object },
      isLoading: { type: Boolean },
      isError: { type: Boolean },
      resourceUrl: { type: String },
    };
  }

  constructor() {
    super();
    this.isLoading = true;
  }

  async firstUpdated() {
    try {
      const url = this.resourceUrl || this.location.pathname;
      this.data = await apiCall(url);
    } catch (_) {
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  }
}
