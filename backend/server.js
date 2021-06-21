import express from "express";
import mongoose from "mongoose";
import env from "dotenv"
import Cards from "./dbCard.js"
import Cors from "cors"

//app confing
const app = express()
env.config()
const port = process.env.PORT || 8001
const connectionUrl = `mongodb+srv://admin:${process.env.PASSWORD}@cluster0.b5mtc.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`


//middleware
app.use(express.json())
app.use(Cors())

//db config
mongoose.connect(connectionUrl, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})


//api endpoint
        //save the card into database
app.post("/tinder/cards", (req,res) => {
    const dbCard = req.body

    Cards.create(dbCard, (error, data) => {

        if(error){
            res.status(500).send(error)
        }
        else{
            res.status(201).send(data)
        }
    })
})

//get Cards
app.get("/tinder/cards",  (req,res) => {
    

    Cards.find((error, data) => {

        if(error){
            res.status(500).send(error)
        }
        else{
            res.status(200).send(data)
        }
    })
})

//listner
app.listen(port, () =>{
    console.log(`listning on localhost: ${port}`);
})