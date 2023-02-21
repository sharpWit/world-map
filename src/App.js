import { useState, useEffect } from "react";
import Map from "./components/map/Map";
import "bootstrap/dist/css/bootstrap.css";
import Info from "./components/info/Info";
import Summary from "./components/summary/Summary";
import Country from "./components/info/Country";
import wtf from "wtf_wikipedia";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("iran");
  const [summary, setSummary] = useState("summary");
  const [infobox, setInfobox] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const doc = await wtf.fetch(selectedCountry, "en");
      const [wikiText, infobox] = await Promise.all([
        doc.text(),
        doc.infobox().keyValue(),
 
      ]);

      setSummary(wikiText);
      setInfobox(infobox);

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
          <Info infobox={infobox} />
        </div>
      </div>
      <Country country={selectedCountry} />

      <Summary summary={summary} />
    </div>
  );
}

export default App;
