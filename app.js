
const express= require("express");

const app=express();

const path=require("path");

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000,()=>{ console.log("El Servidor esta correindo en el puerto http://localhost:3000/");});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});


app.get("/register.html", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
  });


  app.get("/login.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
  });