import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Children } from "react";

function layout({ title, children }) {
  return (
    <>
      <>
        <Navbar />
        <main>
          <>{title}</>
          {children}
        </main>
        <>
          <Footer />
        </>
      </>
    </>
  );
}
export default layout;
