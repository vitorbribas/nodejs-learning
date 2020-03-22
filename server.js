const express = require('express'); // import Express and return a function

const app = express();

app.get('/', (req, res) => {  // (requisition, response)
  res.send('Hello, Vítor')
});

app.listen(3001);