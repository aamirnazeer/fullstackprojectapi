const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

const db = require('./config/database')

db.authenticate()
.then(() => console.log(`database connected`))
.catch(err => console.log(err))

app.use(
  cors({
    origin: "*",
  })
);

app.get("/api", (req, res) => {
  res.send(`hello kkk`);
});

//project routes
app.use('/project', require('./routes/project'))
app.use('/addnew', require('./routes/addnew'))

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
