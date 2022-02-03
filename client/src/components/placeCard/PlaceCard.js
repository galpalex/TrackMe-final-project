import "./PlaceCard.css";
const PlaceCard = ({ place }) => {
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
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default PlaceCard;
