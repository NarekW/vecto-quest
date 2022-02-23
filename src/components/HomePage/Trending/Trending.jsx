import SimpleSlider from "./Slider/SimpleSlider";
import styles from "./Trending.module.scss";

function Trending({ moviesData, setMoviesData, setFeaturedMovieData }) {
  return (
    <section className={`${styles.trending}`}>
      <div className="sliderContent">
        <h2>Treading Now</h2>
        <SimpleSlider
          setFeaturedMovieData={setFeaturedMovieData}
          moviesData={moviesData}
          setMoviesData={setMoviesData}
        />
      </div>
    </section>
  );
}

export default Trending;
