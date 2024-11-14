import { useState } from "react";
import Modal from "./Modal";

const ListMovie = ({ name, data, modalStatus, closeModal }) => {
  const [statusMod, setStatusMod] = useState(modalStatus);
  const [movieID, setMovieID] = useState(0);
  const [movieDetail, setMovieDetail] = useState([]);

  const openModal = async (id) => {
    setMovieID(id);
    console.log("change", statusMod);
    setStatusMod(!statusMod);
    getDetailMovie(id);
  };

  const _closeModal = () => {
    setMovieID(0);
    setStatusMod(!statusMod);
  };

  const getDetailMovie = (id) => {
    try {
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGQ3N2U1ZmRhYWM0YmY1Zjg2NGI1OTVkYWNjM2NjYSIsIm5iZiI6MTczMDc5NDMwMS40NzgwMTY2LCJzdWIiOiI2NzI5Y2RkMTA2ZGM4ODU5NjMyNDAwNWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WZ9N-QAeLlw541YcK7Hpp0m6G1umwnLrI7LX5nW1af0",
        },
      }).then((res) => {
        res
          .json()
          .then((r) => {
            console.log("qwqwqw", r);
            setMovieDetail(r);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <Modal status={statusMod} closeModal={_closeModal}>
        <div className="flex w-full h-full flex-row max-sm:flex-col">
          <div className="flex w-full h-full justify-center">
            <img
              className="w-auto"
              src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
            />
          </div>
          <div className="flex w-full h-0">
            <table className="table w-full max-h-full overflow-auto h-full [&>*]:w-full">
              <tbody className="[&>*]:w-full overflow-auto [&>*]:text-start">
                <tr>
                  <td>Title</td>
                  <td>:</td>
                  <td>{movieDetail.title}</td>
                </tr>
                <tr>
                  <td className="text-start align-top">Synopsis</td>
                  <td className="text-start align-top">:</td>
                  <td className="max-h-3 max-w-10 overflow-auto text-justify">
                    {movieDetail.overview}
                  </td>
                </tr>
                <tr>
                  <td>Genres</td>
                  <td>:</td>
                  <td>
                    {movieDetail?.genres?.map((res) => {
                      return res.name + ", ";
                    })}
                  </td>
                </tr>
                <tr>
                  <td>Release Date</td>
                  <td>:</td>
                  <td>{movieDetail.release_date}</td>
                </tr>
                <tr>
                  <td>Production Country</td>
                  <td>:</td>
                  <td>
                    {movieDetail?.production_countries?.map((val) => {
                      return val.name + ", ";
                    })}
                  </td>
                </tr>
                <tr>
                  <td>Production Compaies</td>
                  <td>:</td>
                  <td>
                    {movieDetail?.production_companies?.map((val) => {
                      return val.name + ", ";
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
      <div className="flex w-full">
        <div className="flex flex-col ">
          <span className="text-2xl font-bold">{name}</span>
          <div className="flex w-full">
            <div className="grid grid-rows-5  grid-cols-4 max-xl::grid-col-3 max-sm:grid-cols-2">
              {data?.results?.map((val) => {
                return (
                  <>
                    <div className=" w-full h-full p-1">
                      <div
                        onClick={() => openModal(val.id)}
                        className="w-full flex flex-col cursor-pointer h-full   p-2"
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${val.poster_path}`}
                          width="auto"
                        />
                        <span className="flex w-full text-2xl justify-center text-center">
                          {val?.title}
                        </span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListMovie;
