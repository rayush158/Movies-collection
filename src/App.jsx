import React, { useState, useEffect } from "react";
import GenreCard from "./components/GenreCard";
import MovieCard from "./components/MovieCard";
import goodMovies from "./components/goodMovies";
import "./App.css";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [movieList, setmovieList] = useState([]);

  useEffect(() => {
    if (selectedGenre) {
      let moviesArr = goodMovies
        .filter((genre) => genre.genre === selectedGenre)
        .map((genre) => {
          return genre.movies;
        })[0];

      setmovieList(moviesArr);
    }
  }, [selectedGenre]);

  return (
    <div className="App">
      <header>
        <h1>Movies Collection 🍿</h1>
        <p>Here are my recommned Movies for you guys!!! </p>
      </header>
      <hr />
      <div className="genre-container">
        {goodMovies.map((genre, i) => (
          <GenreCard
            key={i}
            genre={genre.genre}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
        ))}
      </div>
      <hr />
      <div className="movie-container">
        {movieList &&
          movieList.map((movie, i) => (
            <MovieCard
              key={i}
              movie={movie.name}
              stars={movie.stars}
              link={movie.link}
              storyline={movie.storyline}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
