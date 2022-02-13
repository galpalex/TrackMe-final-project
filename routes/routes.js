import express from "express";

import {
  getAllPlaces,
  postPlace,
  removePlace,
  modifyPlace,
} from "../controllers/controllers.js";

const placesRouter = express.Router();

placesRouter.get("/places", getAllPlaces);
placesRouter.put("/places/:id", modifyPlace);
placesRouter.post("/places", postPlace);
placesRouter.delete("/places/:id", removePlace);

export { placesRouter };
