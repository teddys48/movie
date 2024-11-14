import { useContext, useEffect, useState } from "react";
import ButtonToggle from "./ButtonToggle";
import AppContext from "../helper/context";

const Navbar = () => {
  let { sidebar, setSidebar } = useContext(AppContext);
  const [contentSearch, setContentSearch] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {}, [sidebar]);

  const onChangeSearch = (keyword) => {
    if (keyword != "") {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`,
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
          res
            .json()
            .then((r) => {
              setSearchData(r);
            })
            .catch((err) => {
              alert(err.message);
            });
        })
        .catch((err) => {
          console.log(err);
        });
      setContentSearch(true);
    } else {
      setContentSearch(false);
      setSearchData([]);
    }
  };

  useEffect(() => {
    onChangeSearch(keyword);
  }, [keyword]);

  return (
    <>
      <div className="flex w-full max-sm:flex-col max-sm:space-y-2 top-0 p-2 sticky bg-white/90 flex-row dark:bg-soft_dark/90 backdrop-blur-sm">
        <div className="flex w-full justify-start items-center [&>*]:cursor-pointer">
          <span>
            {!Boolean(sidebar) ? (
              <i
                class="fa-solid fa-chevron-right"
                onClick={() => setSidebar(!Boolean(sidebar))}
              ></i>
            ) : (
              <>
                <i
                  class="fa-solid fa-chevron-left max-sm:hidden"
                  onClick={() => setSidebar(!Boolean(sidebar))}
                ></i>
                <i
                  class="hidden max-sm:block fa-solid fa-chevron-right"
                  onClick={() => setSidebar(!Boolean(sidebar))}
                ></i>
              </>
            )}
          </span>
        </div>
        <div className="flex w-full max-sm:justify-center justify-end space-x-10">
          <div className="flex w-full justify-end items-baseline ">
            <span className="max-sm:w-full w-full space-y-2">
              <input
                type="text"
                className="w-full dark:bg-soft_dark p-1 border-2 rounded-lg"
                placeholder="Search..."
                onChange={(e) => {
                  setTimeout(() => {
                    setKeyword(e.target.value);
                  }, 1000);
                }}
              />
              <div
                className={
                  contentSearch
                    ? "flex max-h-screen w-auto bg-white dark:bg-soft_dark overflow-auto h-screen space-y-2 z-50 fixed"
                    : "hidden"
                }
              >
                <div className="flex flex-col space-y-2 p-2 h-full">
                  {searchData?.results?.map((val) => {
                    return (
                      <>
                        <div className=" flex flex-row space-x-2 items-center">
                          <img
                            className="w-16"
                            src={`https://image.tmdb.org/t/p/w500/${val.poster_path}`}
                          />
                          <span>{val.title}</span>
                        </div>
                      </>
                    );
                  })}{" "}
                </div>
              </div>
            </span>
          </div>
          <div className="flex justify-end">
            <ButtonToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
