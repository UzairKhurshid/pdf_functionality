require('./db/db')
const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const app=express()


const tempRouter=require('./routers/temp')

const publicDirectory = path.join(__dirname, '../public')
app.set("view engine", "ejs");
app.set("views", "server/views");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(tempRouter)

app.listen(3000,()=>{
    console.log('Server is up and running on port 3000')
})