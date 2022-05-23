const  { Client } = require('pg');

const client = new Client ({
    host: 'ec2-99-80-170-190.eu-west-1.compute.amazonaws.com',
    port: 5432,
    user: 'jfkuvyybjqpgqo',
    password: 'f1d2c6c971e07d0fdc6eaf76edaeac96d885c1fb6a8b7d76e2ee6596676ce448',
    database: 'd4fhm3onp8i1fv',
    ssl: true,
    connectionString: process.env.DATABASE_URL,
})

client.connect();

