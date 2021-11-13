const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lateName: {
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
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});



module.exports = Profile = mongoose.model("profile", userProfileSchema);
