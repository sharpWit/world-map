import Map from "./components/map/Map";
import "bootstrap/dist/css/bootstrap.css";
import Info from "./info/Info";
import Summary from "./components/summary/Summary";
// import './App.css';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col col-md-9">
          <Map />
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
