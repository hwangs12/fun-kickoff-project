const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  late_name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  description: {
    type: String,
  }
});



module.exports = Profile = mongoose.model("profile", userProfileSchema);
