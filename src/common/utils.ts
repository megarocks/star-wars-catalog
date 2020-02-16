import { IApiEntity, ICharacter, IFilm, IStarship } from './interfaces';

export const API_BASE_URL: string = 'https://swapi.co/api';

export const apiCall = async (
  resourceUrl: string,
): Promise<IApiEntity | ICharacter | IStarship | IFilm | { results: [IFilm] }> => {
  const url = resourceUrl.startsWith('http') ? resourceUrl : API_BASE_URL + resourceUrl;
  const response = await fetch(url);
  if (!response.ok) throw response;
  return response.json();
};
