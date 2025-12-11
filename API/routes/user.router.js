import express from 'express'

//link to controller
import * as usercontroller from '../controller/user.controller.js'

const router = express.Router();

router.post("/save",usercontroller.save);

router.post("/login",usercontroller.login);

router.get("/fetch",usercontroller.fetch);

router.delete("/delete",usercontroller.deleteuser)

router.patch("/update",usercontroller.updateuser)


export default router;