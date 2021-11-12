import { useState } from "react";
import { ColorBox } from "./ColorBox";

//========================= ADD Movie=======================================
// function AddMovie() {
//   const [movies, setMovies] = useState(movie_list);
//   const [movieName, setMovieName] = useState("");
//   const [moviePoster, setMoviePoster] = useState("");
//   const [movieRating, setMovieRating] = useState("");
//   const [movieDes, setMovieDes] = useState("");
//   const addMovie = () => {
//     const newMovie = {
//       name: movieName,
//       pic: moviePoster,
//       des: movieDes,
//       rating: movieRating,
//     };
//     console.log([...movies, newMovie], newMovie);
//     setMovies([...movies, newMovie]);
//   };
//   return (
//     <div className="movie_form">
//       <form>
//         <input
//           type="text"
//           placeholder="Movie Name"
//           onChange={(event) => setMovieName(event.target.value)}
//         />
//         <input type="text" placeholder="Movie Poster" />
//         <input type="text" placeholder="Movie Rating" />
//         <input type="text" placeholder="Movie description" />
//         <button>Add Movie</button>
//       </form>
//       <h1>hello</h1>
//     </div>
//   );
// }
// ==============================================================================
export function AddColor() {
  const [color, setcolor] = useState("");
  const style_color = {
    backgroundColor: color,
  };

  // const color = ["pink", "orange", "purple"];
  const [colors, setColors] = useState(["pink", "orange", "purple"]);
  return (
    <div>
      <input
        value={color}
        style={style_color}
        type="text"
        placeholder="Enter a color"
        onChange={(event) => {
          setcolor(event.target.value);
          console.log(event.target.value);
        }}
      />
      <button onClick={() => setColors([...colors, color])}>Add Color</button>
      <p>{color}</p>

      <div className="color_Box">
        {colors.map((el) => (
          <ColorBox clr={el} />
        ))}
      </div>
    </div>
  );
}
