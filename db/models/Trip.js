import mongoose from "mongoose";

const { Schema } = mongoose;

const tripSchema = new Schema({
  title: String,
  required: true,
  location: {
    country: String,
    required: true,
    city: String,
  },
  timePeriod: {
    startDate: String,
    required: true,
    endDate: String,
  },
  img: String,
});

const Trip = mongoose.models?.Trip || mongoose.model("Trip", tripSchema);

export default Trip;
