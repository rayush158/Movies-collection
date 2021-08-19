import React from "react";

export default function GenreCard({ genre, selectedGenre, setSelectedGenre }) {
  let isSelected = genre === selectedGenre ? true : false;
  return (
    <div
      className={`genre-card ${isSelected ? "genre-selected" : ""}`}
      onClick={() => setSelectedGenre(genre)}
    >
      {genre}
    </div>
  );
}
