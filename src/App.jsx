import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";


function app() {
  return (
    <div>

      {/* Navbar */}
      <Navbar/>

      {/* content */}
      <HomePage/>

      {/* footer */}
      <Footer/>

    </div>

  );
}

export default app;