import React from "react";

export default function MovieCard({ movie, name, stars, link, storyline }) {
  let star = [];
  for (let i = 0; i < stars && i < 5; i++) {
    star.push("🔥");
  }
  return (
    <div className="movie-card">
      <span className="card-heading">{movie}</span>
      {star}
      <p>{storyline}</p>
      <a href={link} target="_blank">
        Watch Movie
      </a>
    </div>
  );
}
