import React from "react";

export default function Info() {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="assets/img/iran.png"
        alt="Card image cap"
      />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Capital: Tehran</li>
        <li className="list-group-item">Official languages: Persian</li>
        <li className="list-group-item">Population: 83,183,741</li>
      </ul>
    </div>
  );
}
