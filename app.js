const users = [{id: 1, name: 'John Doe'}, {id: 1, name: 'Jane Doe'}];
app.get('/users', (req, res) => {
    res.json(users);
});