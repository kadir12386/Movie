import { useState } from "react";
import { Counter } from "./Counter.js";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Card from "@mui/material/Card";
import { useHistory } from "react-router";
// while import { } sometimes we use

export function Movie({ name, pic, rating, story }) {
  const history = useHistory();
  const [show, setShow] = useState(false);
  // const styles = { display: show ? "block" : "none" };
  const styles = { display: show ? "block" : "none" };
  return (
    <Card className="movie-container">
      <img src={pic} alt={name} className="movie-poster" />
      <div className="movie-info">
        <div className="movie-specs">
          <h3>
            {name}
            <div>
              <IconButton aria-label="show" onClick={() => setShow(!show)}>
                {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </div>
          </h3>

          <p>
            <span role="img" aria-label="star">
              ⭐ {rating}
            </span>
          </p>
        </div>

        <div className="info-container">
          <div className="icon-container">
            <IconButton aria-label="show" color="info">
              <InfoIcon onClick={() => history.push("/movies/")} />
            </IconButton>

            <IconButton aria-label="show" color="success">
              <EditIcon />
            </IconButton>

            <IconButton aria-label="show" color="error">
              <DeleteForeverIcon />
            </IconButton>
          </div>

          {/* 
        {show ? <p className="movie-summary">{story}</p> : ""} */}
          {/* <p style={styles} className="movie-summary">
          {story}
        </p> */}
          <p className="movie-summary" style={styles}>
            {story}
          </p>
          <Counter />
        </div>
      </div>
    </Card>
  );
}
