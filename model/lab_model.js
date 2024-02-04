import mongoose from "mongoose";

const Schema = mongoose.Schema;

const labSchema = new Schema({
  labItem: {
    type: String,
    required: true,
  },

  labType: {
    type: String,
    required: true,
  },

  mainCategory: {
type: String,
required: true
  },

  subCategory: {
    type: String,
    required: true
  },

  labCode: {
    type: String,
    required: true
  },

  labPrice: {
    type: Number,
    required: true
  }
}, {timestamps: true, toJSON: {
  virtuals: true
}}
);

const Lab = mongoose.model('Lab', labSchema);
export default Lab;