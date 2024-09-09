import { useEffect, useState } from "react";
import { getFavoriteMovies, searchMovies } from "~/services/Search";
import Search from "~/pages/Search";

export default function SearchPage() {
  const [loadingMovie, setLoadingMovie] = useState(false);
  const [resultSearch, setResultSearch] = useState([]);
  const [isFavoriteList, setIsFavoriteList] = useState(true);

  const onSearch = async (query: string) => {
    setLoadingMovie(true);

    try {
      const { results } = await searchMovies({ query });
      setResultSearch(results);
      setIsFavoriteList(false);
    } catch (error) {
      alert("Ocorreu um erro");
    } finally {
      setLoadingMovie(false);
    }
  };

  const onListFavorite = async () => {
    setLoadingMovie(true);

    try {
      const { results } = await getFavoriteMovies();
      setResultSearch(results);
      setIsFavoriteList(true);
    } catch (error) {
      alert("Ocorreu um erro");
    } finally {
      setLoadingMovie(false);
    }
  };

  useEffect(() => {
    onListFavorite();
  }, []);

  return (
    <Search
      onSearch={onSearch}
      goToFavorite={onListFavorite}
      loadingMovie={loadingMovie}
      isFavoriteList={isFavoriteList}
      resultSearch={resultSearch}
    />
  );
}
