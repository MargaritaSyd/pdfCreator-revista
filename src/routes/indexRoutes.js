const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController');


router.get('/:id' , indexController.index);

router.get('/pdf/:id' , indexController.pdfCreator)


router.get('/error', indexController.error);



module.exports = router;