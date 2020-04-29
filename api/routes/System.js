const mongoose = require("mongoose");
const System = mongoose.model("system");
const uniqid = require("uniqid");
const multer = require("multer");
const upload = multer({ dest: "image/" });
const fs = require("fs");

module.exports = app => {
  //Get Styles Info
  app.get("/api/system", async (req, res) => {
    const system = await System.findOne();
    return res.send({
      status: "success",
      data: system
    });
  });

  //Create First Styles
  app.post("/api/system", async (req, res) => {
    const system = await new System();
    system.name = "KASEM VET CLINIC";
    system.save();
  });

  //Change System Name
  app.put("/api/system/name", async (req, res) => {
    const system = await System.findOne();
    system.name = req.body.name;
    system.save();

    return res.send({
      status: "success",
      messages: "Change System Name Success"
    });
  });

  //Change System Mode
  app.put("/api/system/darkmode", async (req, res) => {
    const system = await System.findOne();
    system.darkmode = req.body.darkmode;
    system.save();

    return res.send({
      status: "success",
      messages: "Change System Mode Success"
    });
  });

  //Change System Theme
  app.put("/api/system/theme", async (req, res) => {
    const system = await System.findOne();
    system.theme = req.body.theme;
    system.save();

    return res.send({
      status: "success",
      messages: "Change System Theme Success"
    });
  });

  //Change System Logo
  app.put("/api/system/logo", async (req, res) => {
    const system = await System.findOne();
    system.logo = req.body.logo;
    system.save();

    return res.send({
        status: "success",
        messages: "Change System Logo Success"
      });
  });
};
