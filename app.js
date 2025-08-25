const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/users' , (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    resizeTo.status(201).json(newUser);
});

const users = [{id: 1, name: 'John Doe'}, {id: 1, name: 'Jane Doe'}];
app.get('/users', (req, res) => {
    res.json(users);
});
app.delete('/users/:id', (req, res)=>{
    const userId = parseInt(req.params.id);
    const index = users.findIndex(user => user.id == userId);
    if(index !== -1){

            users.splice(index, 1);
            req.status(200).send(`User ${userId} deleted`)
    } else {
        res.status(404).send('User not found');
    }
    
})