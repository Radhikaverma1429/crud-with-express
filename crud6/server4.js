const express = require('express');
const app = express();

const PORT =3000;
app.use(express.json());
app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`);
})

const users = [];

// create user

app.post('/users',(req,res)=>{
    
});


app.get('/users/:id',(req,res) =>{

})


app.put('/users/:id',(req,res)=>{

})

app.delete('/user/:id',(req,res)=>{

})

