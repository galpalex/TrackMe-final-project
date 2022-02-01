import React from "react";
import Map from "../../components/map/Map";
import { Wrapper } from "@googlemaps/react-wrapper";
import "./homepage.css";
import api from "../../api/api";
import { useState, useEffect } from "react";
import LocationPage from "../../components/location/LocationPage";

function Homepage() {
  const [places, setPlaces] = useState([]);
  const [placeOnMap, setplaceOnMap] = useState([]);

  const getAllPlaces = async () => {
    try {
      const response = await api.get("/places");
      console.log(response);
      if (response) {
        setPlaces(response.data);
      } else {
        console.log("errrrr");
      }
    } catch (e) {
      throw new Error("cannot get response from server :(");
    }
  };
  useEffect(() => {
    getAllPlaces();
  }, []);

  const bringPlaceFromMap = (val) => {
    setplaceOnMap(val);
    console.log(val);
  };

  return (
    <div className="homepage-container">
      <Wrapper apiKey={process.env.REACT_APP_MAP_KEY}>
        <Map places={places} placeOnMap={bringPlaceFromMap} />
      </Wrapper>
      <LocationPage placeData={placeOnMap} />
    </div>
  );
}

export default Homepage;
