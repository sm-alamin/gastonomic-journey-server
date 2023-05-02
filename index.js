const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('the server of chef recipe hunter app is running...')
})

app.listen(port, () => {
  console.log(`chef recipe hunter is running on port ${port}`)
})