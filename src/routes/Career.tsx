import CareerBanner from "../components/Career/CareerBanner";
import Internship from "../components/Career/Internship";
import Openings from "../components/Career/Openings";
import OurPeople from "../components/Career/OurPeople";
import Women from "../components/Career/Women";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Career() {
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
      <CareerBanner />
      <OurPeople />
      <Openings />
      <Women />
      <Internship />
      <Footer />
    </div>
  );
}

export default Career;
