import mongoose from "mongoose";

const Schema = mongoose.Schema;

const pharmacySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
    },
    drugCode: {
      type: String,
      required: true,
    },

    unitPricing: {
        type: String,
        required: true,
      },
      
      price: {
        type: Number,
        required: true,
      },
  },
  { timestamps: true }
);

const Pharmacy = mongoose.model("Pharmacy", pharmacySchema);
export default Pharmacy;
