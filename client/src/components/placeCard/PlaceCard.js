import "./PlaceCard.css";
import { onDelete } from "../../utils/utils";
import React, { useContext } from "react";
import { AppContext } from "../../context";

const PlaceCard = ({ place }) => {
  const { isRefreshing } = useContext(AppContext);
  const { setIsRefreshing } = useContext(AppContext);

  return (
    <>
      {place.name ? (
        <div className="place">
          <label>Place name:</label>
          <p>{place.name}</p>
          <label>Comment:</label>
          <p>{place.comment}</p>
          <label>Coordinates latitude:</label>
          <p>{place.coordinates[0]}</p>
          <label>Coordinates longitude:</label>
          <p>{place.coordinates[1]}</p>
          <label>
            {" "}
            <button
              className="delete-btn"
              onClick={() => {
                onDelete(place);
                setIsRefreshing(!isRefreshing);
              }}
            >
              <span className="search-magnifier" aria-label="trash" role="img">
                🗑️
              </span>
            </button>
          </label>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default PlaceCard;
