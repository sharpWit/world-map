import React from "react";

export default function Info({ infobox  }) {
  return (
    <div className="card">
      {/* <img
        className="card-img-top"
        src={flag}
        alt="Card image cap"
      /> */}
      {infobox && (
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Capital: {infobox.capital}</li>
          <li className="list-group-item">
            Official languages: {infobox.official_languages}
          </li>
          <li className="list-group-item">
            Population: {infobox.population_estimate}
          </li>
          <li className="list-group-item">Currency: {infobox.currency}</li>
        </ul>
      )}
    </div>
  );
}
