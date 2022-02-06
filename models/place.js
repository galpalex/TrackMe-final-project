import mongoose from "mongoose";

const placeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
    // validate(value) {
    //   if (parseInt(value, 10).length !== 2) {
    //     throw new Error("Coordinates are invalid");
    //   }
    // },
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
