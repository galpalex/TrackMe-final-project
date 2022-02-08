import React from "react";
import { AppContext } from "../../context";
import Map from "../../components/map/Map";
import { Wrapper } from "@googlemaps/react-wrapper";
import "./homepage.css";
import api from "../../api/api";
//import Spinner from "../../components/spinner/Spinner";
import { useState, useEffect, useRef } from "react";
import LocationPage from "../../components/location/LocationPage";

function Homepage() {
  const [places, setPlaces] = useState([]);
  const [placeOnMap, setplaceOnMap] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(true);
  // const value = { isRefreshing, setIsRefreshing };
  // const PlaceContext = React.createContext({
  //   isRefreshing: false,
  //   setIsRefreshing: () => {},
  // });
  const spinnerRef = useRef();

  const setLoading = (state) => {
    if (state) spinnerRef.current.classList.remove("hidden");
    else if (!state) spinnerRef.current.classList.add("hidden");
  };
  const getAllPlaces = async () => {
    try {
      const response = await api.get("/places");
      // setLoading(false);
      // console.log(response);
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
    // if (places.length > 1) {
    getAllPlaces();
    // }

    console.log("from homepage", isRefreshing);
  }, [isRefreshing]);

  const bringPlaceFromMap = (place) => {
    setplaceOnMap(place);
    console.log(isRefreshing);
  };

  return (
    <div className="homepage-container">
      <AppContext.Provider value={{ isRefreshing, setIsRefreshing }}>
        <Wrapper apiKey={process.env.REACT_APP_MAP_KEY}>
          <Map places={places} placeOnMap={bringPlaceFromMap} />
        </Wrapper>

        <LocationPage placeData={placeOnMap} />
      </AppContext.Provider>

      {/* <Spinner spinnerRef={spinnerRef} /> */}
    </div>
  );
}

export default Homepage;
