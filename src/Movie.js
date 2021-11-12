import { useState } from "react";
import { Counter } from "./Counter.js";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import Card from "@mui/material/Card";
// while import { } sometimes we use

export function Movie({ name, pic, rating, story }) {
  const [show, setShow] = useState(false);
  // const styles = { display: show ? "block" : "none" };
  return (
    <Card className="movie-container">
      <img src={pic} alt={name} className="movie-poster" />
      <div className="movie-info">
        <div className="movie-specs">
          <h3>
            {name}
            <IconButton aria-label="show" onClick={() => setShow(!show)}>
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>

            <IconButton aria-label="show" onClick={() => setShow(!show)}>
              <InfoIcon />
            </IconButton>
          </h3>

          <p>
            <span role="img" aria-label="star">
              ⭐ {rating}
            </span>
          </p>
        </div>

        {show ? <p className="movie-summary">{story}</p> : ""}
        <Counter />
      </div>
    </Card>
  );
}
