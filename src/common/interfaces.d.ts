export interface IApiEntity {
  url: string;
}

export interface IFilm extends IApiEntity {
  title: string;
  release_date: string;
  characters: [string];
  starships: [string];
}

export interface ICharacter extends IApiEntity {
  name: string;
  height: string;
  gender: string;
  films: [string];
}

export interface IStarship extends IApiEntity {
  name: string;
  model: string;
  length: string;
  films: [string];
}
