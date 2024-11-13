import { useContext, useEffect, useState } from "react";
import ButtonToggle from "./ButtonToggle";
import AppContext from "../helper/context";

const Navbar = () => {
  let { sidebar, setSidebar } = useContext(AppContext);
  useEffect(() => {}, [sidebar]);

  return (
    <>
      <div className="flex w-full max-sm:flex-col  top-0 p-2 sticky bg-white/90 flex-row dark:bg-soft_dark/90 backdrop-blur-sm">
        <div className="flex w-full justify-start items-center">
          <span>
            {!Boolean(sidebar) ? (
              <i
                class="fa-solid fa-chevron-right"
                onClick={() => setSidebar(!Boolean(sidebar))}
              ></i>
            ) : (
              <i
                class="fa-solid fa-chevron-left max-sm:fa-solid fa-chevron-right"
                onClick={() => setSidebar(!Boolean(sidebar))}
              ></i>
            )}
          </span>
        </div>
        <div className="flex w-full max-sm:justify-center justify-end space-x-10">
          <div className="flex w-full justify-end items-baseline">
            <span className="max-sm:w-full w-full">
              <input
                type="text"
                className="w-full dark:bg-soft_dark p-1 border-2 rounded-lg"
                placeholder="Search..."
              />
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
