const express = require('express')

const app = express();

app.use(express.json()) //to make data in readable format
app.use(express.urlencoded({ extended: true })); //to make data in readable format


app.use((req,res,next)=>{
    console.log("Middleware first");
    next();
    
})

app.use((req,res,next)=>{
    console.log("Middleware second");
    next();
    
})

app.get('/',(req,res)=>{
    res.send('First Page')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.listen(5000,()=>{
    console.log('Server is running on port : 5000');
    
})