import React from "react";
import map from "./coord.json";
import ImageMapper from "react-img-mapper";
import WorldMap from "./map.jpg";

export default function Map({ handleSelectedCountry }) {
  return (
    <ImageMapper
      onClick={(e) => handleSelectedCountry(e.name)}
      src={WorldMap}
      map={map}
      width={800}
      imgWidth={1000}
    />
  );
}
