import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="w-full h-screen overflow-y-hidden flex">
        <div className="max-w-[320px] bg-[#FBFBFB] w-full">
          <Sidebar />
        </div>
        <div className="flex w-full px-[10px] max-w-[1100px] mx-auto h-screen flex-col">
          <div className="w-full">
            <Header />
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
