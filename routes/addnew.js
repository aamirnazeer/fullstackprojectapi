const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Project = require("../models/Project");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("sequelize");

router.get("/", (req, res) => {
  Project.create({ id: 3, name: "suhail" })
    .then(console.log(`sucess`))
    .catch((err) => console.log(err));
});

module.exports = router;
