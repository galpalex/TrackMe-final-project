import React from "react";
import "./imageCard.css";

function Images({ place }) {
  return (
    <div>
      {place.images ? (
        <div className="imgs-container">
          <img src={place.images[0]} alt={place.name} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
//to do: add carusel
export default Images;
