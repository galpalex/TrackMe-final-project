import React, { useState } from "react";
import "./map.css";

const Marker = ({ markerPoint, placeOnMap, place }) => {
  const [marker, setMarker] = useState();
  const [pop, setPop] = useState();

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
      displayLocationInfo(e);
    });
  };

  const displayLocationInfo = () => {
    placeOnMap(place);
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
