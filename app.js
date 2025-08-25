
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