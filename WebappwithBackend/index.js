const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser())

app.set("view engine", "ejs");

// app.get('/',(req,res)=>{
//     res.render("index")
// })


app.get('/',function(req,res){
  res.cookie('name','Sansar')
  res.send("Hello,Welcome ");
})

app.get('/cookie',function(req,res){
  res.send("This is cookie data store on your browser")
  console.log(req.cookies);
  
})

// app.get("/", function (req, res) {
//   fs.readdir("./files", function (err, files) {
//     res.render("index", { files: files });
//   });
// });

// app.post("/create", function (req, res) {
//   fs.writeFile(
//     `./files/${req.body.title.split("").join("")}.txt`,
//     req.body.detail,
//     function (err) {
//       console.log("errro ",err); 
//     }
//   );
//   res.redirect('/')
// });

// app.get('/files/:filename',function(req,res){
//   fs.readFile(`./files/${req.params.filename}.txt`, 'utf8', function(err,filedata){
//     res.render('show',{filename:req.params.filename,filedata:filedata})
//   })
// })

app.listen(5000, () => {
  console.log("Server is running on port : 5000");
});
