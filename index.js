const express=require('express');
const app=express();
const users=require('./MOCK_DATA.json');
const fs=require('fs');
const { join } = require('path');

app.use(express.urlencoded({extended:false}));

//Routes
//Get users
app.get('/api/users',(req,res)=>{
    return res.status(200).json(users);
})

//Get user with id
app.get('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    if(user){
        return res.status(200).json({message:"User fetched successfully",user:user});
    }else{
        return res.status(404).json({message:"User not found"});
    }
})

//POST user
app.post('/api/users',(req,res)=>{
    const body=req.body;
    const newUser={id:users.length+1, ...body};
    users.push(newUser);
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err)=>{
        if(err){
            return res.status(500).json({message:"Something went wrong"});
        }else{
            return res.status(201).json({message:"User posted successfully"});
        }
    })
})

//update user


//delete user


const PORT=8000;
app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
})