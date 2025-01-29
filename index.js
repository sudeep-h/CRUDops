const express=require('express');
const app=express();
const users=require('./MOCK_DATA.json');
const fs=require('fs');

app.use(express.urlencoded({extended:false}));

//Routes
//Get users
app.get('/api/users',(req,res)=>{
    return res.status(200).json(users);
})

//Get user with id


//POST user


//update user


//delete user


const PORT=8000;
app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
})