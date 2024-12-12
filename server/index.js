const express = require('express');
const app = express();
const port = 3000;

const http = require('http').Server(app);

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your Vue dev server
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));




app.get('api',(req,res)=>{
    res.json({
        message:"Hello World!",
    })
})


socketio.on('connection',()=>{
    console.log(`${socket.id} connected`);
    socket.on('disconnect',()=>{
        console.log(`${socket.id} disconnected`);
    })
    socket.on('disconnect',()=>{
        console.log(`${socket.id} disconnected`);
    })
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})