// const express = require("express");
// const app = express();

// const PORT = 8000;
// app.use(express.json())
// app.listen(PORT, () => {
//     console.log(`server running on port ${PORT}`); 
// });

// const users = [];

// //create user

// app.post('/users', (req, res) => {
//     console.log(req.body);              
//     const user = {
//         id: users.length + 1,
//         name: req.body.name,
//         email: req.body.email
//     };
//     users.push(user);
//     console.log(users);
//     res.send(user);
// })


// // read user

// app.get('/users/:id', (req, res) => {
//     try {
//         const id = req.params.id;
//         const user = users.find(u => u.id === parseInt(id));
//         if (!user) return res.status(404).send('user not found');
//         res.send(user);
//     } catch (error) {
//         console.log(error.message);
//     }
// })


// // update user
// app.put('/users/:id', (req, res) => {
//     const id = req.params.id;
//     const user = users.find(u => u.id === parseInt(id));
//     if (!user) return res.status(404).send('user not found');
//     user.name = req.body.name;
//     user.email = req.body.email;
//     res.send(user);
// })

// // delete user

// app.delete('/user/:id', (req, res) => {
//     const id = req.params.id;
//     const index = users.findIndex(u => u.id === parseInt(id));
//     if (index === -1) return res.status(404).send("user not found");
//     users.splice(index, 1);
//     res.send('user deleted')
// })  



const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);