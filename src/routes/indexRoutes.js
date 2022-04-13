const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController');


router.get("/" , indexController.ok)

router.get('/:id' , indexController.index);

router.post('/frente/pdf/:id' , indexController.pdfCreator)




router.post('/reverso/pdf/:id' , indexController.pdfCreator2)


router.get('/error', indexController.error);
//router.get('/api_ejemplares' , indexController.apiEjempalares)

module.exports = router;