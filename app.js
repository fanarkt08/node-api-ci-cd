const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/users' , (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    resizeTo.status(201).json(newUser);
});

