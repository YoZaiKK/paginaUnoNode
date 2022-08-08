const express = require('express');
const app = express();
app.set('port', 3000)

// middleware

// routes
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
  console.log(__dirname);
})

// static files 

// listening server
app.listen(app.get('port'), () => {
  console.log("Server on port ", app.get('port'));
});