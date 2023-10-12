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

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
  const { name } = req.params;


    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response
    res.send(pet);

});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
const { owner } = req.query;

    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response
res.send(pet);
});


app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;