import mongoose from "mongoose";

const placeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
  comment: {
    type: String,
    required: false,
  },
  images: {
    type: [String],
    default: [],
    required: false,
  },
});

const Place = mongoose.model("Place", placeSchema);

export { Place };
