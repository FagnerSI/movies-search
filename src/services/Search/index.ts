import { createQueryParams } from '~/utils/createQueryParams';
import { api } from '../Api';

export const searchMovies = (query: Record<string, string>) => {
  const queryMovie = createQueryParams({...query, language: 'pt-BR' });

  return api?.get('/search/movie', queryMovie)
}



