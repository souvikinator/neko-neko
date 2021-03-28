const express=require('express');
const router=express.Router();
const catWare=require("../middleware/cat");
const foodWare=require("../middleware/food");

router.get("/cat",catWare);
router.get("/foods",foodWare);

module.exports=router;