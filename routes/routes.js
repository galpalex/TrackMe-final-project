import express from "express";

import {
  getAllPlaces,
  getPlace,
  postPlace,
  removePlace,
  modifyPlace,
} from "../controllers/controllers.js";

const placesRouter = express.Router();

placesRouter.get("/places", getAllPlaces);
placesRouter.get("/places/:id", getPlace);
placesRouter.put("/places/:id", modifyPlace);
placesRouter.post("/places", postPlace);
placesRouter.delete("/places/:id", removePlace);

export { placesRouter };
