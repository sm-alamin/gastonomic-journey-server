const express = require('express')
const app = express()
const port = 5000;

const chef_info = require('./data/chef_info.json');

app.get('/', (req, res) => {
  res.send('the server of chef recipe hunter app is running...')
})
app.get('/chef-info', (req, res) => {
    res.send(chef_info);
})
app.listen(port, () => {
  console.log(`chef recipe hunter is running on port ${port}`)
})