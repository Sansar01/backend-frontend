const express = require('express')
const app = express()
const product  = require('./routes/Product')


const swaggerUIPath= require("swagger-ui-express");
const swaggerjsonFilePath = require("./swagger.json");
app.use("/api-docs", swaggerUIPath.serve, swaggerUIPath.setup(swaggerjsonFilePath));

app.use(product)

app.listen(3000,()=>console.log('Server is running on port: 3000'))