const port = process.env.PORT||3000
const path=require("path")
const express=require("express")

const app=express()

app.set("view engine","hbs")

const viewsDirectory=path.join(__dirname,"../temp1/views")
app.set("views",viewsDirectory);

app.get("/",(req,res)=>{
  res.render("index",{
    title:"Home Page",
    desc:"This is Home Page"

  })
})


app.get("/service",(req,res)=>{
  res.render("service",{

    title:"Service",
    name:"Basil",
    age:21,
    city:"Giza",
    img1: "/images/trainer-3.jpg"
  })

})

app.get("/team",(req,res)=>{
  res.render("team",{

    title:"Team",
    name:"Hafsa",
    age:20,
    city:"Giza",
    img2: "/images/trainer-2.jpg"
  })
})

app.use(express.static('public'));

var hbs =require("hbs")
const partialsPath=path.join(__dirname,"../temp1/partials")
hbs.registerPartials(partialsPath)


app.listen(port,()=>{
  console.log("App is listening on port:3000")
})