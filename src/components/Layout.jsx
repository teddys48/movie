import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <div className="flex flex-row w-full space-x-2">
        <Sidebar />
        <div className="flex w-full flex-col pb-2  max-h-screen overflow-auto">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
