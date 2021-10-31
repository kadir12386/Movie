import "./style.css";
import { MovieList } from "./MovieList";
import { useState } from "react";
export default function App() {
  // const user = [
  //   {
  //     name: "Sangeetha",
  //     pic:
  //       "https://www.teahub.io/photos/full/51-514550_cute-doll-images-for-facebook-profile-cute-doll.jpg"
  //   },
  //   {
  //     name: "Suba",
  //     pic:
  //       "https://i.pinimg.com/originals/80/b2/55/80b25547c576b96369101032b30de411.jpg"
  //   },
  //   {
  //     name: "Suriya",
  //     pic:
  //       "https://cdnaws.sharechat.com/207bd00c-bad4-4c5c-9a5b-93eaaa9f3da0-d0aae533-039f-4c57-805c-b67949635473_compressed_40.jpg"
  //   }
  // ];
  const movie_list = [
    {
      movie_name: "Avengers: Endgame",
      poster:
        "https://images.moviesanywhere.com/4677177f6f0595289bc3e767e7b47459/1d6c6c73-ab1e-4453-969c-6a4e965ebb37.jpg",
      rating: "8.4",
      story:
        "On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars.",
    },
    {
      movie_name: " Avatar",
      poster: "https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SY741_.jpg",
      rating: "9.4",
      story:
        "Michael, a pizza delivery boy, lives with Anu, an aspiring horror fiction writer. One day, while delivering food, he goes to a bungalow where mysterious events begin to take place.",
    },
    {
      movie_name: "Interstellar",
      poster:
        "http://fc04.deviantart.net/fs71/f/2014/045/a/2/interstellar_by_visuasys-d6ibj30.jpg",
      rating: "6.4",
      story:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    },
    {
      movie_name: "Spider-Man",
      poster:
        "https://i.pinimg.com/originals/08/19/36/081936dcc9e270602e0c28a1da1ff8bf.jpg",
      story:
        "Spider-Man centers on student Peter Parker (Tobey Maguire) who, after being bitten by a genetically-altered spider, gains superhuman strength and the spider-like ability to cling to any surface.",
      rating: "9.4",
    },
    {
      movie_name: "M.S. Dhoni",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      story:
        "M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.",
      rating: "10",
    },
    {
      movie_name: "Soorarai Pottru",
      poster:
        "https://1.bp.blogspot.com/-E1qNd-EQ0ks/X6zDa-V91OI/AAAAAAAAEKQ/9VVb48RaZBw1Py1JkE5GPm1VqszUj5dygCLcBGAsYHQ/s1111/QV1aOv60sr.jpg",
      story:
        "Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.",
      rating: "9.1",
    },
  ];

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
      <h1>Movies</h1>
      <MovieList movie_list={movie_list}></MovieList>

      <AddColor />
    </div>
  );
}

function AddColor() {
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

function ColorBox({ clr }) {
  const color_box_styles = {
    backgroundColor: clr,
    height: "130px",
    width: "130px",
    margin: "20px 4px",
  };
  return <div style={color_box_styles}></div>;
}
