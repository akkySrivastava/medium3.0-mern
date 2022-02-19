const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  displayName: String,
  email: String,
  phoneNumber: String,
  photoURL: String,
  providerId: String,
  uid: String,
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Users", userSchema);
