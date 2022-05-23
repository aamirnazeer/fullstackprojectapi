const Sequelize = require("sequelize");
const db = require("../config/database");

const Project = db.define(
  `project`,
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
  },
  {
    tableName: `project`,
  }
);

module.exports = Project;
