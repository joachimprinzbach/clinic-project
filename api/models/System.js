const mongoose = require("mongoose");
const { Schema } = mongoose;

const systemSchema = new Schema({
  logo: { type: String },
  name: { type: String },
  darkmode: { type: Boolean },
  theme: { type: String }
});

mongoose.model("system", systemSchema);
