const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = mongoose.Types.ObjectId;
const Items = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "" },
    category: {
      ref: "categories",
      type: ObjectId,
    },
    image: { type: String },
    isActive: {
      type: Boolean,
      default: true,
    },
    price: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    qty: { type: Number, default: 0 },
    choices: [
      {
        type: ObjectId,
        ref: "choices",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("items", Items);
