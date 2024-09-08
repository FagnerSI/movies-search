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

export default function Search({
  onSearch,
  loadingMovie,
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
          {resultSearch.length ? (
            resultSearch?.map((movie) => (
              <CardMovie
                imagePath={movie.backdrop_path || movie.poster_path}
                title={movie.title}
                description={movie.overview}
                footerText={footerText(movie.release_date)}
                className={styles.card}
                onClick={() => {}}
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
          <Button
            className={styles.buttonFavorite}
            title={"Ir Para Favoritos"}
            variant="secondary"
            onClick={() => {
              alert("Teste");
            }}
          />
        </div>
      )}
    </div>
  );
}
