import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./routes/Homepage";
import Company from "./routes/Company";
import Products from "./routes/Products";
import Impact from "./routes/Impact";
import RandD from "./routes/RandD";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="company" element={<Company />} />
        <Route path="products" element={<Products />} />
        <Route path="impact" element={<Impact />} />
        <Route path="r&d" element={<RandD />} />
      </Routes>
    </Fragment>
  );
}

export default App;
