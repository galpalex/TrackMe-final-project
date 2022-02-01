import React from "react";
import './map.css'
import Marker from "./Marker";
const Map = ({ places, placeOnMap }) => {
    const ref = React.useRef(null);
    const [map, setMap] = React.useState(null);
    


    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                center: { lat: 31.738347703832464, lng: 34.8505723728733 },
                zoom: 8,
                mapId: 'cd33cb5e819eb83'
            }));
        }

    }, [ref, map]);





    return <div ref={ref} id="map" > 
    {places.map((place) => {
        let temp = {
            position: { lat: place.coordinates[0], lng: place.coordinates[1] },
            map,
            title: place.name,
        }
        return <Marker markerPoint={temp} place={place}  placeOnMap={placeOnMap} key={place._id}/>
    })}
     </div>
}
export default Map;