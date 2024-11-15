import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";
import ListMovie from "../components/ListMovie";
import Modal from "../components/Modal";

const Home = () => {
  const [onWatch, setOnWatch] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);
  const [bannerMovie, setBannerMovie] = useState([]);
  const [slide, setSlide] = useState(0);
  const [topRated, setTopRated] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);

  const closeModal = () => {
    setModalStatus(!modalStatus);
  };

  const openModal = () => {
    setModalStatus(!modalStatus);
  };

  const useInterval = () => {
    let randNumber = randomNumber();
    setInterval(() => {
      console.log("cek intetval", slide, randNumber);
      setSlide(randNumber == slide ? randomNumber() : randNumber);
    }, 10000);
  };

  const randomNumber = () => {
    return Math.round(2 * Math.random());
  };

  const getNowPlayingMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGQ3N2U1ZmRhYWM0YmY1Zjg2NGI1OTVkYWNjM2NjYSIsIm5iZiI6MTczMDc5NDMwMS40NzgwMTY2LCJzdWIiOiI2NzI5Y2RkMTA2ZGM4ODU5NjMyNDAwNWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WZ9N-QAeLlw541YcK7Hpp0m6G1umwnLrI7LX5nW1af0",
        },
      }
    )
      .then((res) => {
        console.log(
          "get data",
          res
            .json()
            .then((r) => {
              console.log("first", r);
              setOnWatch(r);
            })
            .catch((err) => {
              console.log(err);
            })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPopularMovie = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGQ3N2U1ZmRhYWM0YmY1Zjg2NGI1OTVkYWNjM2NjYSIsIm5iZiI6MTczMDc5NDMwMS40NzgwMTY2LCJzdWIiOiI2NzI5Y2RkMTA2ZGM4ODU5NjMyNDAwNWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WZ9N-QAeLlw541YcK7Hpp0m6G1umwnLrI7LX5nW1af0",
      },
    })
      .then((res) => {
        console.log(
          "get data",
          res
            .json()
            .then((r) => {
              console.log("first", r);
              setPopularMovie(r);
              let listBannerMovie = [];
              for (let index = 0; index < 3; index++) {
                listBannerMovie.push(r.results[index]);
              }
              setBannerMovie(listBannerMovie);
            })
            .catch((err) => {
              console.log(err);
            })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTopRatedMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGQ3N2U1ZmRhYWM0YmY1Zjg2NGI1OTVkYWNjM2NjYSIsIm5iZiI6MTczMDc5NDMwMS40NzgwMTY2LCJzdWIiOiI2NzI5Y2RkMTA2ZGM4ODU5NjMyNDAwNWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WZ9N-QAeLlw541YcK7Hpp0m6G1umwnLrI7LX5nW1af0",
        },
      }
    )
      .then((res) => {
        console.log(
          "get data",
          res
            .json()
            .then((r) => {
              setTopRated(r);
            })
            .catch((err) => {
              console.log(err);
            })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUpcomingMovie = () => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGQ3N2U1ZmRhYWM0YmY1Zjg2NGI1OTVkYWNjM2NjYSIsIm5iZiI6MTczMDc5NDMwMS40NzgwMTY2LCJzdWIiOiI2NzI5Y2RkMTA2ZGM4ODU5NjMyNDAwNWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WZ9N-QAeLlw541YcK7Hpp0m6G1umwnLrI7LX5nW1af0",
      },
    })
      .then((res) => {
        console.log(
          "get data",
          res
            .json()
            .then((r) => {
              setUpcoming(r);
            })
            .catch((err) => {
              console.log(err);
            })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPopularMovie();
    getNowPlayingMovie();
    getTopRatedMovie();
    getUpcomingMovie();
  }, []);

  useEffect(() => {
    const a = setInterval(() => {
      let randNumber = randomNumber();
      setSlide(randNumber == slide ? randomNumber() : randNumber);
    }, 10000);
    return () => clearInterval(a);
  }, [slide]);

  return (
    <>
      <div className="bg-white flex-col space-y-2 dark:text-main dark:bg-soft_dark flex">
        <div className="flex static flex-row px-2 max-w-full h-auto justify-center w-full rounded-xl max-h-screen overflow-auto">
          {/* <Carousel className="" slide={false}> */}
          {bannerMovie.map((val, index) => {
            return (
              <>
                <div
                  className={
                    index == slide
                      ? "flex justify-center items-center w-full h-96 max-lg:h-72 max-sm:h-48"
                      : "hidden"
                  }
                  style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original${bannerMovie[slide].backdrop_path}")`,
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    // backgroundColor: "",
                    // display: {index == 1 ? "flex" : "hidden"},
                  }}
                >
                  <div className="flex w-full h-full p-10 justify-center bg-black bg-opacity-40">
                    <span className="text-main flex justify-center text-center text-6xl items-center max-sm:text-lg">
                      {bannerMovie[slide].title}
                    </span>
                  </div>

                  {/* <img
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        val?.backdrop_path
                      }
                      className="w-full bg-black justify-center items-center h-full align-middle"
                    /> */}
                </div>
              </>
            );
          })}
          {/* </Carousel> */}
        </div>
        <ListMovie
          data={onWatch}
          name={"Now Playing"}
          modalStatus={modalStatus}
          closeModal={closeModal}
        ></ListMovie>
        <ListMovie data={topRated} name={"Top Rated"}></ListMovie>
        <ListMovie data={upcoming} name={"Upcoming"}></ListMovie>
      </div>
    </>
  );
};

export default Home;
