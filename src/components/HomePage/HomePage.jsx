import React, { useEffect, useState } from "react";
import MoviesData from "../../db/data.json";
import { motion } from "framer-motion";
import MainMenu from "../common/MainMenu/MainMenu";
import Movie from "./Movie/Movie";
import Trending from "./Trending/Trending";
import styles from "./HomePage.module.scss";

function HomePage() {
  const [moviesData, setMoviesData] = useState(MoviesData.TendingNow);
  const movieHash = JSON.parse(localStorage.getItem("featuredMovieHash"));
  const [featuredMovieData, setFeaturedMovieData] = useState(
    movieHash || MoviesData.Featured
  );
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [prevFeaturedMovieData, setPrevFeaturedMovieData] = useState(null);

  useEffect(() => {
    if (featuredMovieData.VideoUrl) {
      const isDifferentObject = featuredMovieData !== prevFeaturedMovieData;

      if (isDifferentObject) {
        setIsVideoPlaying(false);
        const timer = setTimeout(() => {
          setIsVideoPlaying(true);
        }, 2000);
        return () => {
          clearTimeout(timer);
          setIsVideoPlaying(false);
        };
      }

      setPrevFeaturedMovieData(featuredMovieData);
    }
  }, [featuredMovieData, prevFeaturedMovieData]);

  return (
    <motion.section
      className={`${styles.homepage}`}
      animate={{
        backgroundImage: `url(${require(`../../assets/${featuredMovieData.CoverImage}`)}`,
      }}
    >
      {isVideoPlaying && (
        <div className={`${styles.videoPlayerContainer}`}>
          <video
            loop
            muted
            src={featuredMovieData.VideoUrl}
            autoPlay
            controls={false}
          ></video>
        </div>
      )}

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
