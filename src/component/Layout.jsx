import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <Header />

      <hr size="4" color="blue"></hr>

      <Outlet />

      <hr size="4" color="blue"></hr>

      <Footer />
    </>
  );
};
export default Layout;
