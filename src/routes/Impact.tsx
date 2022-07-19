import Environment from "../components/Impact/Environment";
import Healthcare from "../components/Impact/Healthcare";
import ImpactBanner from "../components/Impact/ImpactBanner";
import Standards from "../components/Impact/Standards";
import Stories from "../components/Impact/Stories";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Impact() {
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
      <ImpactBanner />
      <Healthcare />
      <Environment />
      <Standards />
      <Stories />
      <Footer />
    </div>
  );
}

export default Impact;
