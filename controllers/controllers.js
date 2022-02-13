import { getData, deletePlace, addPlace, editPlace } from "./utils/utils.js";

const getAllPlaces = async (req, res) => {
  try {
    const allPlaces = await getData();
    if (!allPlaces[0]) {
      return res.status(404).send("No places found");
    }
    res.send(allPlaces);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const modifyPlace = async (req, res) => {
  const { id } = req.params;
  try {
    const place = await editPlace(id, req.body);
    res.send(place);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const removePlace = async (req, res) => {
  const { id } = req.params;
  try {
    const place = await deletePlace(id);
    if (!place) {
      return res.status(404).send("No place found, delete failed");
    }
    res.send(place);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const postPlace = async (req, res) => {
  try {
    const place = await addPlace(req.body);
    await place.save();
    res.status(201).send(place);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

export { getAllPlaces, removePlace, postPlace, modifyPlace };
