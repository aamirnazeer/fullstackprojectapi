const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

router.get("/", async (req, res) => {
  const result = await Project.findAll({})
	res.status(200).send(result)
});

module.exports = router;
