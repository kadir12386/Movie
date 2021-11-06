import { Counter } from "./Counter.js";

// while import { } sometimes we use

export function Movie({ name, pic, rating, story }) {
  return (
    <div className="movie-container">
      <img src={pic} alt={name} className="movie-poster" />
      <div className="movie-info">
        <div className="movie-specs">
          <h3>{name} </h3>
          <p>
            <span role="img" aria-label="star">
              ⭐ {rating}
            </span>
          </p>
        </div>
        <p className="movie-summary">{story}</p>
        <Counter />
      </div>
    </div>
  );
}
