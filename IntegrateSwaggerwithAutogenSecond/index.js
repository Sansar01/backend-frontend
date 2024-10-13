const express = require('express')
const app = express()
const swaggerUIPath= require("swagger-ui-express");
const swaggerjsonFilePath = require("./swagger-output.json");
const book = require('./path/bookRoutes')
const user = require('./path/userRoutes')

app.use("/api-docs", swaggerUIPath.serve, swaggerUIPath.setup(swaggerjsonFilePath));

app.use( book);
app.use( user);

app.listen(3000,()=>console.log('Server is running on port: 3000'))