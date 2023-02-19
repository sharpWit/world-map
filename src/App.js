import Map from "./components/map/Map";
import "bootstrap/dist/css/bootstrap.css";
import Info from "./components/info/Info";
import Summary from "./components/summary/Summary";
import { useState } from "react";
// import './App.css';

function App() {
  const [selectedCountry, setSelectedCountry] = useState("iran");
  function handleSelectedCountry(name) {
    setSelectedCountry(name);
  }
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col col-md-9">
          <Map handleSelectedCountry={handleSelectedCountry} />
        </div>
        <div className="col-12 col-md-3">
          <Info />
        </div>
      </div>
      <div className="row mt-3">
        <Summary />
      </div>
    </div>
  );
}

export default App;
