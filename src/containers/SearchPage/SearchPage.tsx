import { useState } from "react";
import { searchMovies } from "~/services/Search";
import Search from "~/pages/Search";

export default function SearchPage() {
  const [loadingMovie, setLoadingMovie] = useState(false);
  const [resultSearch, setResultSearch] = useState([]);

  const onSearch = async (query: string) => {
    setLoadingMovie(true);

    try {
      const { results } = await searchMovies({ query });
      setResultSearch(results);
    } catch (error) {
      // Tratar ERROR
    } finally {
      setLoadingMovie(false);
    }
  };

  return (
    <Search
      onSearch={onSearch}
      loadingMovie={loadingMovie}
      resultSearch={resultSearch}
    />
  );
}
