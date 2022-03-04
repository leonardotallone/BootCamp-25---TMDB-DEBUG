import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

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

const Carrusel = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/discover/popular")
      .then((response) => setPopularMovies(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>Esto es el Carrusel</h3>
      {popularMovies.map((movie) => {
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
export default Carrusel;
