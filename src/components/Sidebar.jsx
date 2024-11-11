import { Link } from "react-router-dom";
import ListMenu from "../helper/ListMenu";

const Sidebar = () => {
  return (
    <>
      <div className=" max-sm:hidden flex w-60 border-r-2 flex-col h-screen rounded-xl bg-white border-r-main dark:bg-soft_dark">
        <div className="flex h-10 items-center p-10 justify-center border-b-2">
          Logo
        </div>
        <div className="flex py-2 px-4 w-full justify-start items-baseline flex-col space-y-3">
          {ListMenu.map((val) => {
            return (
              <>
                <span key={val.name}>
                  <Link
                    to={val.link}
                    className="flex w-full [&>*]:w-full justify-center items-baseline space-x-2"
                  >
                    <i className={val.icon}></i>
                    <span>{val.name}</span>
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
