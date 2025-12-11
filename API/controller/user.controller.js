
//connect to mongodb
import "../models/connection.js"

//to link users model
import UserSchemaModel from "../models/user.model.js";

//to generate random string for token
import rs from "randomstring"

//to generate token 
import jwt from "jsonwebtoken"

// to get url 

import url from "url";
import sendMail from "./email.controller.js";





export const save = async (req, res) => {


  var allUser = await UserSchemaModel.find();
  var l = allUser.length;
  var _id = l == 0 ? 1 : (allUser[l - 1]._id) + 1;
  var userDetail = { ...req.body, "_id": _id, "role": "user", "status": 0, "info": Date() };

  try {
   
    await UserSchemaModel.create(userDetail);
    sendMail(userDetail.email , userDetail.password);
    res.status(201).send({ "status": "true" });
  } catch (error) {
    res.status(500).json({ "status": false })
  }
  console.log("data inserted successfully");
};


export const login = async (req, res) => {
  var userDetails = { ...req.body, "status": 1 };
  // console.log(userDetails)
  var user = await UserSchemaModel.find(userDetails);

  if (user.length > 0) {
    const payload = user[0].email;
    const key = rs.generate(50);
    const token = jwt.sign(payload, key)
    res.status(200).json({ "status": true, "token": token, "user": user[0] })
  }
  else {
    res.status(500).json({ "status": false, "token": "error" })
  }
};


// export const fetch = async (req, res) => {
//   // var condition_id = url.parse(req.url, true).query.condition_id;
//   console.log(req.query)

//   if (condition_id != undefined) {
//     condition_id = JSON.parse(condition_id);

//     const userDetail = await UserSchemaModel.findOne(condition_id);

//     if (userDetail) {
//       res.status(200).json(userDetail);
//     }
//     else (
//       res.status(404).json("resources not fond")
//     )

//   }
//   else {
//     condition_id = {}

//     const userDetail = await UserSchemaModel.find(condition_id);
//     console.log(condition_id)
//     console.log("else part")
//     if (userDetail.length != 0) {
//       res.status(200).json(userDetail);
//     }
//     else (
//       res.status(404).json("resources not fond")
//     )

//   }

// }
/* if use only req.body it will give you result based on _id:33 to _id : 3
it will save result also 


the best way is send req in condition_obj in req.body and parse in JSON 
*/

export const fetch = async (req, res) => {
  const userList = await UserSchemaModel.find(req.query)
  if (userList.length != 0) {
    res.status(200).json(userList);
  }
  else {
    res.status(404).json({ "status": "Resource not found" });
  }
}




export const deleteuser = async (req, res) => {

  // console.log(req.body.condition_obj)
  // console.log(userDetail)
  try {
    const userDetail = await UserSchemaModel.findOne(req.body);
    if (userDetail) {
      const user = await UserSchemaModel.deleteOne(req.body);
      if (user) {
        res.status(200).json({ "status": "ok" });
      } else {
        res.status(500).json({ "status": "server error" });
      }
    } else {
      res.status(404).json({ "status": "Request resource not found" })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ "status": "false" })
  }
}


export const updateuser = async (req, res) => {
  const userDetail = await UserSchemaModel.findOne((req.body.condition_obj))

  if (userDetail) {
    const updateduser = await UserSchemaModel.updateOne((req.body.condition_obj), { $set: req.body.content_obj })
    if (updateduser) {
      res.status(200).json({ "status": "ok" });
    } else {
      res.status(500).json({ "status": "server error" });
    }
  } else {
    res.status(404).json({ "status": "Request resource not found" })
  }
};

