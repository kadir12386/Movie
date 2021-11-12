//Hook -> usestate -> hook are function - it will always start with "use"...
//state - current scenario -> current data - web app
//const [state, setState] = useState(InitalValue);
//like - state setState - setLike -> updates like
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
export function Counter() {
  // const likes = 1;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter-container">
      {/* <button onClick={() => setLike(like + 1)}>
        <span role="img">👍</span> {like}
      </button> */}
      {/* <Button onClick={() => setLike(like + 1)} variant="contained">
        <span role="img">👍</span> {like}
      </Button> */}
      <IconButton aria-label="like" onClick={() => setLike(like + 1)}>
        <Badge badgeContent={like} color="success">
          <span role="img">👍</span>
        </Badge>
      </IconButton>

      {/* <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button> */}
      <IconButton
        aria-label="dislike"
        onClick={() => setDislike(dislike + 1)}
        variant="contained"
      >
        <Badge badgeContent={dislike} color="error">
          <span role="img">👎 </span>
        </Badge>
      </IconButton>

      {/* <Button onClick={() => setDislike(dislike + 1)} variant="contained">
        👎 {dislike}
      </Button> */}
      {/* <p>{like}</p> */}
    </div>
  );
}

//   const [like, setLike] = useState(0);
//   const [color, setcolor] = useState("");

// here for the like inital value for like  is useState(0) the value is 0
// here for the color inital value for color we are using useState("");
