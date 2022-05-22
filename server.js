const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors');

app.use(cors({
  origin: '*'
}));


app.get('/api', (req, res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
})