import { TBaseMovie } from "~/types/movie";

export type SearchProps = {
    loadingMovie: boolean,
    resultSearch: Array<TBaseMovie>,
    isFavoriteList: boolean;
    onSearch: (query: string)=> void;
    goToFavorite: ()=> void;
}