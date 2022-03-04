import React from "react";
import { Link } from "react-router-dom";

import LoginButton from "./Login";
import LogoutButton from "./Logout";


const Navbar = () => {
  return (
    <nav id="nav">
      <ul>
        <li>
          <Link to={"/movies_popular"}>Popular Movies</Link>
        </li>
        <li>
          <Link to={"/movies_toprated"}>Top Rated Movies</Link>
        </li>
        <li>
          <Link to={"/tvshows_popular"}>Popular TV Shows</Link>
        </li>
        <li>
          <Link to={"/tvshows_toprated"}>Top Rated Tv Shows</Link>
        </li>
        <li>
          <LoginButton />
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
