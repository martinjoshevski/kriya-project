import About from "../components/Homepage/About";
import Banner from "../components/Homepage/Banner";
import Catalogue from "../components/Homepage/Catalogue";
import Covid from "../components/Homepage/Covid";
import Global from "../components/Homepage/Global";
import Partners from "../components/Homepage/Partners";
import Products from "../components/Homepage/Products";
import Services from "../components/Homepage/Services";
import TheMedia from "../components/Homepage/TheMedia";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Homepage() {
  return (
    <div className="position-relative">
      <div
        style={{
          backgroundImage: `url("/images/homepage/pink-rectangle.png")`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "700px",
          backgroundSize: "cover",
        }}
      >
        <Navigation />
        <Banner />
        <About />
        <Global />
        <Covid />
        <Products />
        <Services />
        <Catalogue />
        <Partners />
        <TheMedia />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
