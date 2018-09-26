const express = require('express');
const app = express();
const port = 3000;


// GET collection of posts route
app.get('/posts', (req, res) => {
    res.send(`A list of posts has been retrieved!`);
});

// GET entity of post route
app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Post ${id} has been retrieved!`);
});

// POST create new entity of post route
app.post('/posts', (req, res) => {
    const id = req.params.id;
    res.send(`Post ${id} has been created!`);
});

// PUT update the entity of post route
app.put('/posts/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Post ${id} has been updated`);
});

// DELETE delete the entity of post route
app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Post ${id} has been deleted!`);
});

// port listener
const currentPort = () => {
    console.log(`We are live on ${port}`);
  };
app.listen(port, currentPort);
