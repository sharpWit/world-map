import React from "react";
import map from "./coord.json";
import ImageMapper from "react-image-mapper";
import WorldMap from "./map.jpg";

export default function Map() {
  return <ImageMapper src={WorldMap} map={map} width={800} imgWidth={1000} />;
}
