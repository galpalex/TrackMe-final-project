import React from "react";
import { AppContext } from "../../context";
import Map from "../../components/map/Map";
import { Wrapper } from "@googlemaps/react-wrapper";
import "./homepage.css";
import api from "../../api/api";

import { useState, useEffect, useRef } from "react";
import LocationPage from "../../components/location/LocationPage";

function Homepage() {
  const [places, setPlaces] = useState([]);
  const [placeOnMap, setplaceOnMap] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(true);

  const getAllPlaces = async () => {
    try {
      const response = await api.get("/places");
      if (response) {
        setPlaces(response.data);
      } else {
        console.log("error");
      }
    } catch (e) {
      throw new Error("there are no places to display");
    }
  };
  useEffect(() => {
    getAllPlaces();
  }, [isRefreshing]);

  const bringPlaceFromMap = (place) => {
    setplaceOnMap(place);
  };

  return (
    <div className="homepage-container">
      <AppContext.Provider value={{ isRefreshing, setIsRefreshing }}>
        <Wrapper apiKey={process.env.REACT_APP_MAP_KEY}>
          <Map places={places} placeOnMap={bringPlaceFromMap} />
        </Wrapper>

        <LocationPage placeData={placeOnMap} />
      </AppContext.Provider>
    </div>
  );
}

export default Homepage;
