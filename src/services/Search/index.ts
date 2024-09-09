import { createQueryParams } from '~/utils/createQueryParams';
import { api } from '../Api';

const API_KEY = process.env.REACT_APP_API_KEY || '';
const ACCOUNT_ID  = process.env.REACT_APP_ACCOUNT_ID;
const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

export const searchMovies = (query: Record<string, string>) => {
  const queryMovie = createQueryParams({...query, language: 'pt-BR', api_key: API_KEY, });

  return api?.get('/search/movie', queryMovie)
}

export const getFavoriteMovies = () => {

  return api?.get(`/account/${ACCOUNT_ID}/favorite/movies`,  '', {
      Authorization: 'Bearer ' + AUTH_TOKEN,
   })
}


