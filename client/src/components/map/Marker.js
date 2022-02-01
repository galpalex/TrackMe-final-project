import React, { useState } from "react";
import "./map.css";
import api from "../../api/api";

const Marker = ({ markerPoint, place, placeOnMap }) => {
  const [marker, setMarker] = useState();
  const [pop, setPop] = useState();

  // this is event listener for the marker to do action
  const eventListeners = () => {
    marker.addListener("mouseover", () => {
      pop.open({
        anchor: marker,
        shouldFocus: false,
      });
    });
    marker.addListener("mouseout", () => {
      pop.close({
        anchor: marker,
        shouldFocus: false,
      });
    });
    marker.addListener("click", (e) => {
      // displayLocationInfo(e)
    });
  };

  const displayLocationInfo = async (e) => {
    try {
      const response = await api.get(`/place/${place.name}`);
      placeOnMap([response.data, place]);
    } catch (e) {
      throw new Error("oh nooo");
    }
  };

  React.useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
      setPop(
        new window.google.maps.InfoWindow({
          content: markerPoint.title,
        })
      );
    }
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker && markerPoint) {
      marker.setOptions(markerPoint, new window.google.maps.Size(42, 68));
      eventListeners();
    }
  }, [marker, markerPoint]);

  return <div id="marker" translate="no"></div>;
};
export default Marker;
