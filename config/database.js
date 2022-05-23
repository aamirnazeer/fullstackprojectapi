
const Sequelize = require('sequelize')

module.exports = new Sequelize('d4fhm3onp8i1fv', 'jfkuvyybjqpgqo', 'f1d2c6c971e07d0fdc6eaf76edaeac96d885c1fb6a8b7d76e2ee6596676ce448', {
    host: 'ec2-99-80-170-190.eu-west-1.compute.amazonaws.com',
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    define: {
      timestamps: true,
      freezeTableName: true
    },
    logging: false
  });
  
  
