import mongoose from "mongoose";

const { Schema } = mongoose;

const tripSchema = new Schema({
  title: { type: String, required: true },
  location: [
    {
      country: { type: String, required: true },
      city: { type: String },
    },
  ],
  timePeriod: [
    {
      startDate: { type: String, required: true },
      endDate: { type: String, required: true },
    },
  ],
  img: { type: String },
});

const Trip = mongoose.models?.Trip || mongoose.model("Trip", tripSchema);

export default Trip;
