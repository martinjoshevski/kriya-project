import BiosampleBanner from "../components/Biosample/BiosampleBanner";
import Collection from "../components/Biosample/Collection";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Products() {
  return (
    <div
      style={{
        backgroundColor: "white",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "900px",
        backgroundSize: "cover",
      }}
    >
      <Navigation />
      <BiosampleBanner />
      <Collection />
      <Footer />
    </div>
  );
}

export default Products;
