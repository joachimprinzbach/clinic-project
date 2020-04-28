const mongoose = require("mongoose");
const Type = mongoose.model("type");

module.exports = app => {
  // Get all Types
  app.get("/api/type", async (req, res) => {
    const type = await Type.find();
    res.send({ status: "success", data: type });
  });

  // Store Type
  app.post("/api/type", async (req, res) => {
    const type = await new Type();
    type.name = req.body.name;
    type.sort = req.body.sort;
    type.save();
    res.send({ status: "success", messages: "create success !!" });
  });

  // Get Specific Type by ID
  app.get("/api/type/:id", async (req, res) => {
    const type = await Type.findById(req.params.id);
    res.send({ status: "success", data: type });
  });

  // Update Type
  app.put("/api/type/:id", async (req, res) => {
    const type = await Type.findById(req.params.id);
    type.name = req.body.name;
    type.sort = req.body.sort;
    type.save();
    res.send({ status: "success", messages: "update success !!" });
  });

  // Delete Type
  app.delete("/api/type/:id", async (req, res) => {
    const type = await Type.findById(req.params.id);
    type.delete();
    res.send({ status: "success", messages: "delete success !!" });
  });
};
