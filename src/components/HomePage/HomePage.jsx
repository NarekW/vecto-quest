import MainMenu from "../common/MainMenu/MainMenu";
import Movie from "./Movie/Movie";
import Trending from "./Trending/Trending";
import React, { useState } from "react";
import MoviesData from "../../db/data.json";
import styles from "./HomePage.module.scss";
import { motion } from "framer-motion";

function HomePage() {
  const [moviesData, setMoviesData] = useState(MoviesData.TendingNow);
  const movieHash = JSON.parse(
    window.localStorage.getItem("featuredMovieHash")
  );
  const [featuredMovieData, setFeaturedMovieData] = useState(
    movieHash ? movieHash : MoviesData.Featured
  );
  return (
    <motion.section
      className={`${styles.homepage}`}
      animate={{
        backgroundImage: `url(${require(`../../assets/${featuredMovieData.CoverImage}`)}`,
      }}
    >
      <MainMenu />
      <div className={`${styles.page_constructor}`}>
        <Movie featuredMovieData={featuredMovieData} />
        <Trending
          moviesData={moviesData}
          setFeaturedMovieData={setFeaturedMovieData}
          setMoviesData={setMoviesData}
        />
      </div>
    </motion.section>
  );
}

export default HomePage;
