import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.scss";

const SliderItem = ({ movieData, setMoviesData, setFeaturedMovieData }) => {
  const selectHandler = (e) => {
    e.preventDefault();
    setFeaturedMovieData(movieData);
    window.localStorage.setItem("featuredMovieHash", JSON.stringify(movieData));
  };

  return (
    <div>
      <a onClick={selectHandler} href="/#">
        <img
          src={require(`../../../../assets/${movieData.CoverImage}`)}
          alt="error"
          style={{
            maxWidth: "10vw",
          }}
        />
      </a>
    </div>
  );
};

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesArray: [],
    };
  }
  SortMovies = (e) => {
    const movieHash = JSON.parse(
      window.localStorage.getItem("featuredMovieHash")
    );
    const { moviesData } = this.props;
    if (movieHash) {
      const moviesDataCopy = [...moviesData];
      const newArr = moviesDataCopy.filter((el) => el.Id !== movieHash.Id);

      const newMoviesArr = [movieHash, ...newArr];
      this.setState({
        moviesArray: window.localStorage.getItem("featuredMovieHash")
          ? newMoviesArr
          : moviesData,
      });
    } else {
      this.setState({ moviesArray: moviesData });
    }
  };
  componentDidMount() {
    this.SortMovies();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
    };
    const { setFeaturedMovieData } = this.props;

    return (
      <div>
        <Slider {...settings}>
          {this.state.moviesArray.map((el) => (
            <div key={el.id + 1}>
              <SliderItem
                movieData={el}
                setFeaturedMovieData={setFeaturedMovieData}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
