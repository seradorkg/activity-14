import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="container">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;
