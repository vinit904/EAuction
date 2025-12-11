import express from 'express'

import bodyParser from 'body-parser';

import UserRouter from './routes/user.router.js'

import cors from "cors"

import fileUpload from 'express-fileupload';

import categoryRouter from './routes/category.router.js'

const app = express();




//for corss origin problem
app.use(cors());

//To configure fileupload to extract a binary data from body
app.use(fileUpload());


//configuration to fetch req body content : body parser middleware
//used to fetch req data from methods like : POST , PUT , PATCH , DELETE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:true}));



app.use("/user",UserRouter)
app.use("/category",categoryRouter)


app.listen(3005);

console.log("server is invoked at localhost://3005")