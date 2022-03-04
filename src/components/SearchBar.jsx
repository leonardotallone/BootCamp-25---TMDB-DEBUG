import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [resSearchs, setResSearchs] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput(event.target.lastChild.value);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/search/${input}`)
      .then((resSearchs) => setResSearchs(resSearchs.data))
      .catch((err) => console.log(err));
  }, [input]);

  const imgURL = "https://image.tmdb.org/t/p/w500";
  const showImage = (image) => {
    return image ? (
      <img src={`${imgURL}${image}`} alt="" />
    ) : (
      <img
        src="https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg"
        alt=""
      />
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="nav">
        <input type="text" placeholder="Example: The GoodFather" />
      </form>
      <br />
      <br />
      {resSearchs.map((movie) => {
        return (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            {showImage(movie.poster_path)}
            <p>{movie.overview}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchBar;
