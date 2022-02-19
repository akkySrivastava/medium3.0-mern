const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  listDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stories",
  },
});

module.exports = mongoose.model("lists", listSchema);
