const mongoose = require("mongoose");
const User = mongoose.model("user");

module.exports = app => {
  // Get all Users
  app.get("/api/user", async (req, res) => {
    const user = await User.find();
    res.send({ status: "success", data: user });
  });

  // Store User
  app.post("/api/user", async (req, res) => {
    const user = await new User();
    user.fullname = req.body.fullname;
    user.tel = req.body.tel;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save();
    res.send({ status: "success", messages: "create success !!" });
  });

  // Get Specific User by ID
  app.get("/api/user/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    res.send({ status: "success", data: user });
  });

  // Update User
  app.put("/api/user/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    user.fullnamename = req.body.fullname;
    user.tel = req.body.tel;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save();
    res.send({ status: "success", messages: "update success !!" });
  });

  // Delete User
  app.delete("/api/user/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    user.delete();
    res.send({ status: "success", messages: "delete success !!" });
  });
};
