import React, { useEffect, useState } from "react";
import "./location.css";
import PlaceCard from "../placeCard/PlaceCard";
//import ImageCard from "../imageCard/imageCard";
//import EditCard from "../editCard/EditCard";

function LocationPage({ placeData }) {
  //console.log(placeData);

  return (
    <>
      <div className="location-container">
        <PlaceCard place={placeData} />
        {/* <ImageCard place={placeData} /> */}
        {/* <EditCard place={placeData} /> */}
      </div>
    </>
  );
}

export default LocationPage;
