import React, { useState } from "react";
import "./location.css";
import PlaceCard from "../placeCard/PlaceCard";

import AddSpot from "../addSpot/AddSpot";

function LocationPage({ placeData }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="location-container">
        <div>
          <button
            className="add-spot"
            onClick={() => {
              setIsShow(!isShow);
            }}
          >
            <span className="add-btn" aria-label="plus" role="img">
              ➕
            </span>
          </button>
        </div>
        <PlaceCard place={placeData} />
        <div>{isShow ? <AddSpot /> : null}</div>
      </div>
    </>
  );
}

export default LocationPage;
