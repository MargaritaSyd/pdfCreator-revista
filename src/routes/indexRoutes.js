const { Route } = require('express');
const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController');


router.get("/ok/:id" , indexController.ok);

//router.get('/:id' , indexController.index);

router.post('/frente/pdf/:id' , indexController.pdfCreator)




router.post('/reverso/pdf/:id' , indexController.pdfCreator2)


router.get('/error', indexController.error);
router.get('/api_resultados' , indexController.apiResultados);
router.get('/api_resultados_hijos/:id' , indexController.apiResultadosHijos);
router.get('/api_resultado/:id' , indexController.apiUnResultado); //SOLO PARA EJEMPLARES NACIDOS DESPUES DEL 2015
router.get('/api_ejemplares' , indexController.apiEjemplares);
router.get('/api_ejemplar/:id' , indexController.apiEjemplar);
router.get('/api_carreras' , indexController.apiCarreras);
router.get('/api_carrera/:id' , indexController.apiUnaCarrera);
router.get('/api_profesional/:id' ,indexController.apiUnProfesional);
router.get('/api_criador/:id' , indexController.apiUnCriador);
router.get('/api_hijos/:id' , indexController.apiHijos); //BUSCA EJEMPLARES A PARTIR DEL ID DE LA MADRE
router.get('/info_hijos/:id' , indexController.apiInfoHijos);
router.get('/info_carreras/:id' , indexController.apiInfoCarreras)
router.get('/ultima_carrera/:id' , indexController.apiInfoUltimaCarrera)
module.exports = router;