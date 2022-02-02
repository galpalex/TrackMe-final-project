import { Place } from "../../models/place.js";

const getData = async (id) => {
  let places;
  if (!id) {
    places = await Place.find({});
  } else {
    places = await Place.findById(id);
  }
  return places;
};

const deletePlace = async (id) => {
  const place = await Place.findByIdAndDelete(id);
  return place;
};

const addPlace = async (place) => {
  const newPlace = new Place(place);
  return newPlace;
};

const editPlace = async (id, newData) => {
  const place = await Place.findByIdAndUpdate(id, newData, {
    new: true,
    runValidators: true,
  });
  return place;
};

export { getData, deletePlace, addPlace, editPlace };
