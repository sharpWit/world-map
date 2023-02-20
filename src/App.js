import { useState, useEffect } from "react";
import Map from "./components/map/Map";
import "bootstrap/dist/css/bootstrap.css";
import Info from "./components/info/Info";
import Summary from "./components/summary/Summary";
import Wiki from "./components/info/Wiki";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("iran");
  const [summary, setSummary] = useState("");

  useEffect(() => {
    async function fetchData() {
      const wikiText = await wiki(selectedCountry);
      setSummary(wikiText);
    }
    fetchData();
  }, [selectedCountry]);

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
        <Wiki country={selectedCountry} />
        <Summary summary={summary} />
      </div>
    </div>
  );
}

export default App;

async function wiki(country) {
  const wtf = await import("wtf_wikipedia");
  const doc = await wtf.default.fetch(country);
  const text = doc.text();
  return text;
}
