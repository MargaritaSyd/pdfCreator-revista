const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController');


router.get("/ok/:id" , indexController.ok);
router.post('/ok_form' , indexController.okForm)

//router.get('/:id' , indexController.index);

//router.post('/frente/pdf/:id' , indexController.pdfCreator)




//router.post('/reverso/pdf/:id' , indexController.pdfCreator2)


router.get('/error', indexController.error);
router.get('/api_resultados' , indexController.apiResultados);
router.get('/api_resultado/:id' , indexController.apiUnResultado);
router.get('/api_ejemplares' , indexController.apiEjemplares);
//router.get('/api_ejemplares' , indexController.apiEjempalares)
router.get('/api_ejemplar/:id' , indexController.apiEjemplar);
router.get('/api_carreras' , indexController.apiCarreras);
router.get('/api_carrera/:id' , indexController.apiUnaCarrera)
module.exports = router;