import AboutBanner from "../components/About/AboutBanner";
import Culture from "../components/About/Culture";
import EmployingSlider from "../components/About/EmployingSlider";
import Founder from "../components/About/Founder";
import GuidingLights from "../components/About/GuidingLights";
import Quality from "../components/About/Quality";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Company() {
  return (
    <div className="position-relative">
      <div
        style={{
          backgroundColor: "white",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "700px",
          backgroundSize: "cover",
        }}
      >
        <Navigation />
        <AboutBanner />
        <Quality />
        <EmployingSlider />
        <Culture />
        <GuidingLights />
        <Founder />
        <Footer />
      </div>
    </div>
  );
}

export default Company;
