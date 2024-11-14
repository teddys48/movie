import { Link } from "react-router-dom";
import ListMenu from "../helper/ListMenu";
import { useContext } from "react";
import AppContext from "../helper/context";

const Sidebar = () => {
  const { sidebar, setSidebar } = useContext(AppContext);
  return (
    <>
      <div
        className={
          sidebar
            ? " max-sm:hidden flex w-60 flex-col h-screen rounded-xl max-sm:w-0 bg-white border-r-main dark:bg-soft_dark"
            : "max-sm:block max-sm:w-40 max-sm:fixed z-50 bg-white dark:bg-soft_dark  w-14 flex justify-start flex-col h-screen rounded-xl"
        }
      >
        <div className="hidden max-sm:flex max-sm:w-full max-sm:justify-end bg-white dark:bg-soft_dark max-sm:items-end max-sm:p-2">
          <i
            className="fa-solid fa-chevron-left"
            onClick={() => setSidebar(!sidebar)}
          ></i>
        </div>

        <div
          className={
            sidebar
              ? "flex h-10 items-center p-10 justify-center border-b-2"
              : "py-10 max-sm:flex"
          }
        >
          <span
            className={
              sidebar
                ? ""
                : "hidden max-sm:flex max-sm:justify-center max-sm:items-center max-sm:w-full"
            }
          >
            {" "}
            TeddMovie
          </span>
        </div>

        <div className="flex py-2 px-4 w-full justify-start items-baseline flex-col space-y-3">
          {ListMenu.map((val) => {
            return (
              <>
                <span key={val.name} className=" flex justify-center items-center ">
                  <Link
                    to={val.link}
                    className="flex w-full [&>*]:w-full items-center justify-between space-x-2"
                  >
                    <i className={val.icon + " flex w-full"}></i>
                    {sidebar ? (
                      <span className="w-full">{val.name}</span>
                    ) : (
                      <span className="hidden w-full max-sm:block">{val.name}</span>
                    )}
                  </Link>
                </span>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
