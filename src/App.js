import "./style.css";
import { MovieList } from "./MovieList";
// import { Movie } from "./Movie";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Switch, Route, Link } from "react-router-dom";
import { AddColor } from "./AddColor";
import { Inital_movie_list } from "./Inital_movie_list";
import { Redirect } from "react-router";

export default function App() {
  //setMovies is used to update the movie array
  const [movies, setMovies] = useState(Inital_movie_list);

  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieDes, setMovieDes] = useState("");

  //rest Form
  const resetMovieForm = () => {
    setMovieName("");
    setMoviePoster("");
    setMovieRating("");
    setMovieDes("");
  };

  const addMovie = () => {
    console.log("hello");
    const newMovie = {
      movie_name: movieName,
      poster: moviePoster,
      rating: movieRating,
      story: movieDes,
    };
    console.log([...movies, newMovie], newMovie);
    setMovies([...movies, newMovie]);
    resetMovieForm();
  };

  return (
    <div className="App">
      {/* <Msg name={name} image={pic} />
      <Msg name={name1} image={pic1} /> */}
      {/* {user.map((el, index) => (
        <Msg key={index} name={el.name} image={el.pic} />
      ))} */}
      {/* {user.map(({ name, pic }) => (
        <Msg name={name} image={pic} />
      ))} */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Movie">Movies</Link>
          </li>
          <li>
            <Link to="/AddColor">Color game</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        {/* Each route is case, eg. - case '/about': */}
        <Route path="/films">
          <Redirect to="/Movie" />
        </Route>
        <Route path="/Movie">
          {/* Matcht url display the below component */}
          {/* <Movie /> */}
          <div className="movie_form">
            <TextField
              id="outlined-basic"
              label="Movie Name"
              variant="outlined"
              value={movieName}
              type="text"
              onChange={(event) => setMovieName(event.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Movie Poster"
              variant="outlined"
              value={moviePoster}
              type="text"
              onChange={(event) => setMoviePoster(event.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Movie Rating"
              variant="outlined"
              value={movieRating}
              type="number"
              onChange={(event) => setMovieRating(event.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Movie descriptiong"
              variant="outlined"
              value={movieDes}
              type="text"
              onChange={(event) => setMovieDes(event.target.value)}
            />
            {/* <input
          value={movieName}
          type="text"
          placeholder="Movie Name"
          onChange={(event) => setMovieName(event.target.value)}
        /> */}
            {/* <input
          value={moviePoster}
          type="text"
          onChange={(event) => setMoviePoster(event.target.value)}
          placeholder="Movie Poster"
        />
        
        <input
          value={movieRating}
          type="number"
          onChange={(event) => setMovieRating(event.target.value)}
          placeholder="Movie Rating"
        />
       
        <input
          value={movieDes}
          type="text"
          onChange={(event) => setMovieDes(event.target.value)}
          placeholder="Movie description"
        /> */}

            {/* <button onClick={addMovie}>Add Movie</button> */}
            <Button variant="contained" onClick={addMovie} color="primary">
              Add Movie
            </Button>
          </div>
          <MovieList movie_list={movies}></MovieList>
        </Route>
        <Route path="/AddColor">
          <AddColor />
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
        <Route path="/">
          <h1>Welcome to Movie App</h1>
        </Route>
      </Switch>

      {/* <AddColor /> */}
    </div>
  );
}

function NotFound() {
  const style = { width: "100%" };
  return (
    <img
      src="https://i.pinimg.com/originals/cc/4d/aa/cc4daa9d54c97a1badec1f0fd9a327dc.gif"
      alt="Notfound"
      style={style}
    />
  );
}
