import { TBaseMovie } from "~/types/movie";

export type SearchProps = {
    loadingMovie: boolean,
    resultSearch: Array<TBaseMovie>,
    onSearch: (query: string)=> void;
}