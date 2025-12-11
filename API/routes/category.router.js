import express from 'express';

//to link controller
import * as categoryController from '../controller/category.controller.js';

const router = express.Router();

router.post("/save",categoryController.save);

export default router;