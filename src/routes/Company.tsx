import Navigation from "./Navigation";

function Company() {
  return (
    <div
      style={{
        backgroundImage: `url("/images/under-construction.png")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "900px",
        backgroundSize: "cover",
      }}
    >
      <Navigation />
    </div>
  );
}

export default Company;
