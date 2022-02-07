import "./PlaceCard.css";
import { onDelete } from "../../utils/utils";
import EditCard from "../editCard/EditCard";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";
import ImageCard from "../imageCard/imageCard";

const PlaceCard = ({ place }) => {
  const { isRefreshing } = useContext(AppContext);
  const { setIsRefreshing } = useContext(AppContext);
  const [isShow, setIsShow] = useState(false);
  const [displayPlace, setDisplayPlace] = useState(place.name);
  // const setShow = () => {
  //   setIsShow(true);
  // };
  // console.log(isShow);

  useEffect(() => {
    setIsShow(false);
    setDisplayPlace(place.name);
    console.log(displayPlace);
  }, [displayPlace]);

  return (
    <div className="container">
      <div>
        {place.name ? (
          <div className="place">
            <label>Place name:</label>
            <p>{place.name}</p>
            <label>Comment:</label>
            <p>{place.comment}</p>
            <label>Coordinates latitude:</label>
            <p>{place.coordinates[0]}</p>
            <label>Coordinates longitude:</label>
            <p>{place.coordinates[1]}</p>{" "}
            <button
              className="delete-btn"
              onClick={() => {
                onDelete(place);
                setIsRefreshing(!isRefreshing);
              }}
            >
              <span className="delete-btn" aria-label="trash" role="img">
                🗑️
              </span>
            </button>
            <button
              className="update-btn"
              onClick={() => {
                // EditCard(place);
                // setIsRefreshing(!isRefreshing);
                // setIsShow(true);
                // <EditCard place={place} />;
                //setShow();
                setIsShow(!isShow);
              }}
            >
              <span className="update-btn" aria-label="update" role="img">
                ✏️
              </span>
            </button>
            <ImageCard place={place} />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>{isShow ? <EditCard place={place} /> : null}</div>
    </div>
  );
};
export default PlaceCard;
