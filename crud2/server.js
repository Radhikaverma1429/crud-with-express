const express = require("express");
const app = express();

const PORT = 3000;
app.use(express.json());
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
})

const users = [];

// create users

app.post('/users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(user);
    res.send(user)
});

// read user

app.get('/users/:id', (req, res) => {
    try {
        const id = req.params.id;
        const user = users.find(u => u.id === parseInt(id));
        if (!user) return res.status(404).send('server not found');
        res.send(user);
    } catch (error) {
            console.log(error,message);
    }
})

// update user /

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id === parseInt(id));
    if (!user) return res.status(404).send('server not found');
    user.name = req.body.name;
    user.email = req.body.email;
    res.send(user);
})

// delete user

app.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    const index = users.findIndex(u => u.id === parseInt(id));
    if (index === -1) return res.status(404).send('server not dound');
    users.splice(index, 1);
    res.send('user deleted');
}) 