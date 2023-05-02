const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000;

app.use(cors())

const chef_info = require('./data/chef_info.json');
const recipe = require('./data/recipe.json');

app.get('/', (req, res) => {
  res.send('the server of chef recipe hunter app is running...')
})
app.get('/chef-info', (req, res) => {
    res.send(chef_info);
})
app.get('/recipe-info/:id', (req, res) => {
  const id = req.params.id;
  const selectedChef = recipe.filter(chef => chef.id === id);
  res.send(selectedChef)
})
app.listen(port, () => {
  console.log(`chef recipe hunter is running on port ${port}`)
})