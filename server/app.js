const path = require('path');

const express = require('express');
const yamlParser = require('yamljs');
const cors = require('cors');
const fs   = require('fs'); 

const app = express();
app.use(cors());

const port = 8001;

app.get('/api/menus', function(req, res, next) {
  try {
    const filename = path.join(__dirname, './data/menu.yaml');

    const contents = fs.readFileSync(filename, 'utf8');
    
    let nativeObject = yamlParser.parse(contents);

    res.json(nativeObject);
  } catch (e) {
    console.log(e);
    res.send(new Error(e));
  }
});

app.listen(port, () => {
  console.log(`API listening on port ${port}.`);
});
