const express = require("express");
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const users = [{id: 1, name: 'John Doe'}, {id: 1, name: 'Jane Doe'}];
app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users' , (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
});

app.delete('/users/:id', (req, res)=>{
    const userId = parseInt(req.params.id);
    const index = users.findIndex(user => user.id == userId);
    if(index !== -1){

            users.splice(index, 1);
            res.status(200).send(`User ${userId} deleted`)
    } else {
        res.status(404).send('User not found');
    }
    
})

app.use((req, res) => {
    res.status(404).send("Error 404, page not found");
});

app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);
});