import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AppContext from "../helper/context";
import { useState } from "react";

const Layout = () => {
  const [sidebar, setSidebar] = useState(localStorage.getItem("sidebar"));
  return (
    <>
      <AppContext.Provider value={{ sidebar, setSidebar }}>
        <div className="flex flex-row w-full space-x-2">
          <Sidebar />
          <div
            className={
              !sidebar
                ? " max-sm:h-screen max-sm:w-full max-sm:bg-black max-sm:fixed max-sm:bg-opacity-60 max-sm:block"
                : "hidden"
            }
          ></div>
          <div className="flex w-full flex-col pb-2  max-h-screen overflow-auto">
            <Navbar />
            <Outlet />
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
};

export default Layout;
