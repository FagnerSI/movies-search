import { useState } from "react";
import Button from "~/components/Button";
import Input, { InputOnKeyUpEvent } from "~/components/Input";
import CardMovie from "~/components/CardMovie";
import Spinner from "~/components/Spinner";
import styles from "./styles.module.scss";
import { logo2x } from "~/assets/images";
import { SearchProps } from "./types";
import { formatterDate } from "~/utils/formatterDate";
import EmptyResult from "~/components/EmptyResult";
import { TBaseMovie } from "~/types/movie";

export default function Search({
  onSearch,
  loadingMovie,
  isFavoriteList,
  goToFavorite,
  resultSearch,
}: SearchProps) {
  const [search, setSearch] = useState("");

  const changeText = (entry: string) => {
    setSearch(entry);
  };

  const handleClickSearch = () => {
    onSearch(search);
    setSearch("");
  };

  const handleSelect = (movie: TBaseMovie) => {
    window.dispatchEvent(new CustomEvent("movieSelected", { detail: movie }));
  };

  const onPressEnter = (event: InputOnKeyUpEvent) => {
    if (event.key === "Enter") {
      handleClickSearch();
    }
  };

  const footerText = (date: string) => `Lançado em ${formatterDate(date)}`;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logo2x} alt="Logo" className={styles.imageLogo} />
        <div className={styles.search}>
          <Input
            value={search}
            onKeyUp={onPressEnter}
            onChange={changeText}
            placeholder="Digite o nome de um filme"
            className={styles.inputSearch}
          />
          <Button
            disabled={!search}
            className={styles.buttonSearch}
            title={"Buscar"}
            variant="secondary"
            onClick={handleClickSearch}
          />
        </div>
      </div>
      {loadingMovie ? (
        <Spinner.Screen />
      ) : (
        <div className={styles.content}>
          <span className={styles.contentTitle}>
            {isFavoriteList ? "Sua lista de favoritos" : "Resultado da busca"}
          </span>
          <div className={styles.contentCard}>
            {resultSearch.length ? (
              resultSearch?.map((movie) => (
                <CardMovie
                  key={movie.id}
                  imagePath={movie.backdrop_path || movie.poster_path}
                  title={movie.title}
                  description={movie.overview}
                  footerText={footerText(movie.release_date)}
                  className={styles.card}
                  onClick={() => handleSelect(movie)}
                />
              ))
            ) : (
              <EmptyResult
                title="Buscar Filmes"
                description={`
              Aqui você busca por filmes que deseja saber mais informações.
              Use o campo de busca acima para isso. O resultado irá ser exibido aqui.`}
              />
            )}
          </div>
          <Button
            className={styles.buttonFavorite}
            title="Favoritos"
            variant={"secondary"}
            onClick={goToFavorite}
          />
        </div>
      )}
    </div>
  );
}
