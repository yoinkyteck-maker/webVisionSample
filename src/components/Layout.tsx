import { Outlet } from "react-router-dom";
import Navbar from "./Header";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
