
import mongoose from "mongoose";

const TripSchema = new mongoose.Schema({
  destination: String,
  data: Object,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Trip || mongoose.model("Trip", TripSchema);
