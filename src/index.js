const express = require('express');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//rutas
app.use(require('./routes/index.js'));


app.listen(3000);
console.log('Server on port 3000');