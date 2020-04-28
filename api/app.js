const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./models/Category");
require("./models/Type");
require("./models/User");

mongoose.connect("mongodb://localhost:27017/clinicproject", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected!!");
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

require("./routes/Category")(app);
require("./routes/Type")(app);
require("./routes/User")(app);
require("./routes/ImageUpload")(app);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
