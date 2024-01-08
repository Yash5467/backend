import express from 'express';
import cors from 'cors'
import {screenShare} from './routes/index.js'

const app=express();


app.use(cors({
    origin: process.env.CLIENT_SIDE_URL
}));
app.use(express.json({limit : '16kb'}));

app.use(express.urlencoded({extended: true, limit :'16kb'}));
app.use("/screen-share",screenShare);

app.get("/",(req,res)=>{
    res.send("working");
})


export {
    app
}
