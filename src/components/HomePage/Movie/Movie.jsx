import React, { useState } from "react";
import styles from "./Movie.module.scss";
import sherman from "../../../assets/FeaturedTitleImage.png";

function formatDuration(durationInMinutes) {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  return `${hours}h ${minutes}m`;
}

function Movie({ featuredMovieData }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <section className={`${styles.movieSection}`}>
      <div className={`${styles.movieContext}`}>
        <div className={`${styles.category}`}>{featuredMovieData.Category}</div>
        <div className={`${styles.movieName}`}>
          {featuredMovieData.Title === "The Irishman" ? (
            <img src={sherman} alt="error" />
          ) : (
            featuredMovieData.Title
          )}
        </div>
        <div className={`${styles.infoBar}`}>
          <span>{featuredMovieData.ReleaseYear}</span>
          <span>{featuredMovieData.MpaRating}</span>
          <span>
            {formatDuration(parseInt(featuredMovieData.Duration, 10))}
          </span>
        </div>
        <div className={`${styles.movie_description}`}>
          <p>{featuredMovieData.Description}</p>
        </div>
        <div className={`${styles.more_Buttons}`}>
          <a href="/#" onClick={openVideoModal}>
            <i className="fas fa-play"></i> Play
          </a>
          <a href="/#">More Info</a>
        </div>
      </div>

      {isVideoModalOpen && (
        <div className={`${styles.videoModal}`}>
          <div className={`${styles.videoModalContent}`}>
            <iframe
              title="videoPlayer"
              width="560"
              height="315"
              src={featuredMovieData.VideoUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button onClick={closeVideoModal}>Close Video</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Movie;
