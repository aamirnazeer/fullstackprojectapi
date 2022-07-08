const Sequelize = require("sequelize");

module.exports = new Sequelize(
  "demcpa1nb33ou3",
  "usyntzzxjgxkhn",
  "e573754da86e5afb89fc2745551b98615a979a55cfd7d37c46905162f392c7e7",
  {
    host: "ec2-3-248-121-12.eu-west-1.compute.amazonaws.com",
    dialect: "postgres",
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      timestamps: true,
      freezeTableName: true,
    },
    logging: false,
  }
);
