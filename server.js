const pets = require('./data');

// import the express module/package
const express = require('express');
const PORT = 8080;

//create a new express app 
const app = express();

// add middleware - return all things in the public folder
app.use(express.static('public'));

/* 
Get all pets.
Get pets by name.
Get pets by owner's name*/


// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html");
// });

// GET - all pets - '/api/v1/pets'
app.get('/api/vi/pets', (req, res) => {
    console.log(pets);
    res.send(pets);
});

//GET - pet by id - '/api/v1/pets/:name'

app.listen(PORT, () => {
    console.log(`listing on port: ${PORT}`);
})