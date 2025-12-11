import CategorySchemaModel from "../models/category.model.js"
import rs from 'randomstring';
import url from 'url';
import path from 'path';
import '../models/connection.js'


export const save = async (req , res) =>{
  try{
    console.log("hi")
    const lastObject =await CategorySchemaModel.findOne().sort({"_id":-1});
   
    const _id = lastObject==null?1:lastObject._id+1;
   //console.log(_id)
   //console.log(lastObject);
    if(!req.files || !req.files.caticon)
    {
      res.status(404).json({"status":false,"message":"category icon is required"});
      return;
    }
    const caticon = req.files.caticon;
    //console.log("hello");
    const caticonnm = rs.generate()+"-"+Date.now()+"-"+caticon.name;
    let cDetails = {...req.body,"caticonnm":caticonnm,"_id":_id};
    //console.log(cDetails);
    await CategorySchemaModel.create(cDetails);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const uploadpath = path.join(__dirname,'../../EAuction_UI/public/assets/uploads/caticons',caticonnm);
    await caticon.mv(uploadpath);
    res.status(200).json({"status":true}); 

      
  }
  catch(error)
  {
    console.log(error);
    res.status(500).json({"status":false});
  }
}