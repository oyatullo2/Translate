import { Navigate, Outlet } from "react-router-dom";

export const MainProvider = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to={"/"} />;
};
