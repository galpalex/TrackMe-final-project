import React, { useEffect, useState } from "react";
import "./location.css";
import PlaceCard from "../placeCard/PlaceCard";
import ImageCard from "../imageCard/imageCard";

function LocationPage({ placeData }) {
  //console.log(placeData);
  return (
    <>
      <div className="location-container">
        <PlaceCard place={placeData} />
        <ImageCard place={placeData} />
      </div>
    </>
  );
}

export default LocationPage;
