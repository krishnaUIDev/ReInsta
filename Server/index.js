const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.send('insta')
})

app.listen(4000, () => {
  console.log('Listing on port 4000')
})
