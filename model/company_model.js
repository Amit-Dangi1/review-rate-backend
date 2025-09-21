import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  foundedOn: { type: Date, required: true },
  city: { type: String, required: true },
  image: { type: String }
}, { timestamps: true });

export const Company =  mongoose.model("Company", companySchema);