const mongoose = require("mongoose");
const { Schema } = mongoose;

const typeSchema = new Schema({
  name: { type: String, required: true },
  sort: { type: Number }
});

mongoose.model("type", typeSchema);
