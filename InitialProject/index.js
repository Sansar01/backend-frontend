require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/detail',(req,res)=>{
    res.send('<h2>First Project</h2>')
})

app.get('/login',(req,res)=>{
    res.send('<h2>This is login page</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})