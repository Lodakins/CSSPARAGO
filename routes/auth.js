const router = require('express').Router();
const path = require('path');
const {index,border,boxshadow,textshadow} = require("../controllers/auth")


router.get('/',index);

router.get('/textshadow',textshadow);

router.get('/boxshadow',boxshadow);

router.get('/border',border);



module.exports= router;