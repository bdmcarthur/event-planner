const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;
const User = require("./user");

// Define userSchema
const partySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    imageUrl: [
      {
        type: String
      }
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    location: {
      type: Object
    },
    Time: {
      type: String
    },
    Date: {
      type: String
    },
    Address: {
      type: String
    },
    GuestList: [
      {
        type: String
      }
    ]
  },

  {
    timestamps: true
  }
);

const Party = mongoose.model("Party", partySchema);
module.exports = Party;
