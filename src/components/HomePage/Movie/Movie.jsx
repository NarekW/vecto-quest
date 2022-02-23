import styles from "./Movie.module.scss";
import sherman from "../../../assets/FeaturedTitleImage.png";

function Movie({ featuredMovieData }) {
  return (
    <section className={`${styles.movieSection}`}>
      <div className={`${styles.movieContext}`}>
        <div className={`${styles.category}`}>movie</div>
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
          <span>{featuredMovieData.Duration}</span>
        </div>
        <div className={`${styles.movie_description}`}>
          <p>{featuredMovieData.Description}</p>
        </div>
        <div className={`${styles.more_Buttons}`}>
          <a href="/#">
            <i class="fas fa-play"></i> Play
          </a>
          <a href="/#">More Info</a>
        </div>
      </div>
    </section>
  );
}

export default Movie;
