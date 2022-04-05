const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController');


router.get("/" , indexController.ok)

router.get('/:id' , indexController.index);

router.post('/pdf/:id' , indexController.pdfCreator)

router.post('/pdf2/:id' , indexController.pdfCreator)


router.get('/error', indexController.error);
//router.get('/api_ejemplares' , indexController.apiEjempalares)

module.exports = router;