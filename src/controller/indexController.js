let db = require("../database/models");
let Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');
const fs = require('fs')
const path = require('path')
const utils = require('util')
const puppeteer = require('puppeteer')
const hb = require('handlebars');
const readFile = utils.promisify(fs.readFile)
var Sequelize = require('sequelize');



let indexController = {
 
//CREADOR DE PDF PARA PEDIGREE HOJA DE FRENTE
    pdfCreator: function (req, res) {

        let inputs = req.body;
        let inputName = req.body.ejemplarNombre

        //Continua el código
        async function getTemplateHtml() {
            console.log("Loading template file in memory");
            try {
                const invoicePath = path.resolve("./views/index.ejs");
                return await readFile(invoicePath, 'utf8');
            } catch (err) {
                //return Promise.reject("Could not load html template");
                console.log(err);
            }
        }
        async function generatePdf() {
            let pathId = 'pdf'+ req.params.id + '.pdf'
            
            let data = { inputs };
            getTemplateHtml().then(async (res) => {
                // Now we have the html code of our template in res object
                // you can check by logging it on console
                // console.log(res)
                console.log("Compiing the template with handlebars");

                const template = hb.compile(res, { strict: true });
                // we have compile our code with handlebars
                const result = template(data);
                // We can use this to add dyamic data to our handlebas template at run time from database or API as per need. you can read the official doc to learn more https://handlebarsjs.com/
                const html = result;
                // we are using headless mode
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                // We set the page content as the generated html by handlebars
                await page.setContent(html);
                // We use pdf function to generate the pdf in the same folder as this file.
                await page.pdf({
                    // path: 'invoice.pdf',
                    path: pathId,
                    //width: "190mm",
                    //height: "270mm",
                    // format: 'A4' 
                });
                await browser.close();
                // console.log(pathId)
                // console.log(input)
            }).catch(err => {
                console.error(err);
            });
        }
        generatePdf();
        res.send("index");
        console.log(inputs)
                            // });
                    // });

            // // })
            // .then(function () {
            //     res.redirect("/");
            // });
    },

    //CREADOR DE PDF DE PEDIGREE HOJA REVERSO

    pdfCreator2: function (req, res) {

        let inputs = req.body;
        let inputName = req.body.ejemplarNombre

        //Continua el código
        async function getTemplateHtml() {
            console.log("Loading template file in memory");
            try {
                const invoicePath = path.resolve("./views/index2.ejs");
                return await readFile(invoicePath, 'utf8');
            } catch (err) {
                //return Promise.reject("Could not load html template");
                console.log(err);
            }
        }
        async function generatePdf() {
            let pathId = 'pdf'+ req.params.id + '.pdf'
            
            let data = { inputs };
            getTemplateHtml().then(async (res) => {
                // Now we have the html code of our template in res object
                // you can check by logging it on console
                // console.log(res)
                console.log("Compiing the template with handlebars");

                const template = hb.compile(res, { strict: true });
                // we have compile our code with handlebars
                const result = template(data);
                // We can use this to add dyamic data to our handlebas template at run time from database or API as per need. you can read the official doc to learn more https://handlebarsjs.com/
                const html = result;
                // we are using headless mode
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                // We set the page content as the generated html by handlebars
                await page.setContent(html);
                // We use pdf function to generate the pdf in the same folder as this file.
                await page.pdf({
                    // path: 'invoice.pdf',
                    path: pathId,
                    width: "190mm",
                    height: "270mm",
                    // format: 'A4' 
                });
                await browser.close();
                // console.log(pathId)
                // console.log(input)
            }).catch(err => {
                console.error(err);
            });
        }
        generatePdf();
        res.send("index");
        console.log(inputName)
    },
  

   error: function(req,res) {
       res.send('error');
   },
   

   //PLANTILLA PARA CREACION DE PDF PEDIGREE
   
   ok: function(req,res) {
       let id = req.params.id
       res.render("template" , {id})
   },
  
//JSON CON INFO DE TODOS LOS EJEMPLARES
      
   apiEjemplares: function(req,res){
  //  let ejemplaresTodos = [];
    db.ejemplares.findAll({
        attributes: ['id','nombre','anio_nac','mes_nac','dia_nac','sexo','pelo','raza','criador_id','padre_id','madre_id','padre','madre'],
        raw: true,
        nest: true
        
    })
        .then( losEjemplares => {
            return res.status(200).json({
                count: losEjemplares.length,
                data: losEjemplares,
                status: 200
            });
        
        }) 
        .catch(function(err){
             console.log(err);
        });
      
},

//JSON CON INFO DE UN EJEMPLAR POR ID

apiEjemplar: function(req,res){
    
    let id = req.params.id;
    db.ejemplares.findByPk(id , {
        attributes: ['id','nombre','anio_nac','mes_nac','dia_nac','sexo','pelo','raza','criador_id','padre_id','madre_id','padre','madre',]      
    })
        .then( ejemplar => {
            console.log(ejemplar);
            let theEJemplar = {
                id: ejemplar.id,
                nombre: ejemplar.nombre, 
                anio_nac: ejemplar.anio_nac,
                mes_nac: ejemplar.mes_nac,
                dia_nac: ejemplar.dia_nac,
                sexo: ejemplar.sexo, 
                pelo: ejemplar.pelo,
                raza: ejemplar.raza,
                criador_id: ejemplar.criador_id,
                padre_id: ejemplar.padre_id,
                madre_id: ejemplar.madre_id,
                padre: ejemplar.padre,
                madre: ejemplar.madre,
                foto: ejemplar.foto,
                muestra: ejemplar.muestra,
                muestra_ejemplar: ejemplar.muestra_ejemplar,
                muestra_padres: ejemplar.muestra_padres,
                familia: ejemplar.familia,
                debutante: ejemplar.debutante,
            };
            return res.status(200).json({
                data: theEJemplar,
                status: 200
            });
        });    

    
},

//JSON CON INFO DE TODAS LAS CARRERAS
apiCarreras: function(req,res){
    console.log('ok');
   
 
   db.carreras.findAll({
        attributes: ['id' , 'hipodromo' , 'nombre' , 'grupo' , 'fecha'],
        raw: true,
        nest: true
   })

  .then( lasCarreras => {

       res.status(200).json({
           count: lasCarreras.length,
           data: lasCarreras,
           status: 200
       });
    
   
})   

.catch(function(e){
   console.log(e);
});

   
},

//JSON CON INFO DE UNA CARRERA POR ID DE LA CARRERA 
apiUnaCarrera: function(req,res){
   let id = req.params.id;
   db.carreras.findByPk(id,
    {attributes: ['id' , 'hipodromo' , 'nombre' , 'grupo', 'fecha']}
    )
       .then( carrera => {
           /*
           console.log(carrera);
            let laCarrera = {
               id: carrera.id,
               hipodromo: carrera.hipodromo,
               nombre: carrera.nombre,
               grupo: carrera.grupo,
               
           };
           */
           return res.status(200).json({
              data: carrera,
              // data: laCarrera,
               status: 200
           });
       });    

  
},

//JSON CON INFO DE TODOS LOS RESULTADOS DE PUESTO 1, 2, 3
   
   apiResultados: function(req,res){
    console.log('ok');
   
   //let arrayResult = [];
   db.resultados.findAll({
       where: {
           llego_numero:[ 1,2,3]
       },
        attributes: ['id', 'carrera_id', 'eje_id' , 'llego_numero' , 'importe'],
      
        raw: true,
        nest: true
   })

  .then( losResultados => {
       res.status(200).json({
           count: losResultados.length,
           data: losResultados,
           status: 200
       });
    
   
})   

.catch(function(e){
   console.log(e);
});

   
},
// API RESULTADOS POR ID DE UN EJEMPLAR:

  
apiResultadosHijos: function(req,res){
 
   let idHijo = req.params.id
   //let arrayResult = [];
   db.resultados.findAll({
       where: {
           eje_id: idHijo,
           llego_numero:[ 1,2,3]
       },
        attributes: ['id', 'carrera_id', 'eje_id' , 'llego_numero' , 'importe'],
      
        raw: true,
        nest: true
   })

  .then( losResultados => {
       res.status(200).json({
           count: losResultados.length,
           data: losResultados,
           status: 200
       });
    
   
})   

.catch(function(e){
   console.log(e);
});

   
},

// API RESULTADO POR EJEMPLAR NACIDOS DESPUES DEL 2015

apiUnResultado: function(req,res){
    console.log('ok');
    let id = req.params.id;
   //let arrayResult = [];
   db.resultados.findAll({
        where: {
           eje_id: id,
           carrera_id: {
            [Op.gte]: 159662,
            
           } 
            
        },
        attributes: ['id', 'carrera_id', 'eje_id' , 'llego_numero' , 'importe', 'caballeriza' , 'cuidador'],
      
        raw: true,
        nest: true
   })

  .then( losResultados => {
       res.status(200).json({
           count: losResultados.length,
           data: losResultados,
           status: 200
       });
    
   
})   

.catch(function(e){
   console.log(e);
});

   
},
//APi PARA ENCONTRAR CUIDADORES Y CRIADORES POR ID

apiUnProfesional: function(req,res){
    console.log('ok');
    let id = req.params.id;
   //let arrayResult = [];
   db.profesionales.findByPk(id,{
       
        attributes: ['id', 'descripcion'],
      
        raw: true,
        nest: true
   })

  .then( profesional => {
       res.status(200).json({
    
           data: profesional,
           status: 200
       });
    
   
})   

.catch(function(e){
   console.log(e);
});

   
},

//JSON CON INFO DE EJEMPLARES HIJOS DE UNA MISMA MADRE CON ID DE LA MADRE

apiInfoHijos: async function(req,res){
  
    let {id} = req.params;
   
   const {dataValues: ejemplar} = await db.ejemplares.findByPk(id)

    const hermanos = await db.sequelize.query(`select ejemplares.id, ejemplares.nombre as nombreEjemplar, ejemplares.padre, ejemplares.sexo ,madre_id, carrera_id, llego_numero, carreras.nombre as nombreCarrera, carreras.hipodromo,
    carreras.grupo
    from palermo.ejemplares as ejemplares
    left join palermo.resultados as res on res.eje_id = ejemplares.id left join palermo.carreras as carreras
    on carreras.id = res.carrera_id where ejemplares.madre_id = ${ejemplar.madre_id}  `, { type: QueryTypes.SELECT });/* group by ejemplares.id*/

    let hermanosInfo = hermanos.reduce((prev, current) => {
            const {
              carrera_id,
              llego_numero,
              nombreCarrera,
              hipodromo,
              grupo
            } = current

            const carrera = {
                    id: carrera_id,
                    llego_numero,
                    nombreCarrera,
                    hipodromo,
                    grupo
                }

            const elementExistis = prev.find(valor => valor.id === current.id)

                if (elementExistis){
                    elementExistis.carreras = [...elementExistis.carreras, carrera ] 
                    return prev
                }

                const elemento = {
                    id: current.id,
                    nombreEjemplar: current.nombreEjemplar,
                    padre: current.padre,
                    sexo: current.sexo,
                    madre_id: current.madre_id,
                    carreras: [ carrera ]
                }
                return [...prev, elemento]


 }, [] )

     res.status(200).json({
        data: hermanosInfo,
         status: 200
     });
},

//JSON CON NOMBRE DEL CRIADOR POR ID DEL CRIADOR

apiUnCriador: function(req,res){
    console.log('ok');
    let id = req.params.id;
   db.criadores.findByPk(id,{
       
        attributes: ['id', 'haras' , 'propietario'],
      
        raw: true,
        nest: true
   })

  .then( criador => {
       res.status(200).json({
    
           data: criador,
           status: 200
       });
    
   
    })   

    .catch(function(e){
    console.log(e);
    });

   
},
//API PARA ENCONTRAR HIJOS A PARTIR DEL ID DE LA MADRE
apiHijos: function(req,res){

    let idMadre = req.params.id;
   //let arrayResult = [];
   db.ejemplares.findAll({
        where: {
           madre_id: idMadre, 
        },
        attributes: ['id','nombre','anio_nac','sexo','madre_id','padre'],    
      
        raw: true,
        nest: true
   })

  .then( losResultados => {
       res.status(200).json({
           count: losResultados.length,
           data: losResultados,
           status: 200
       });
    
   
})   

.catch(function(e){
   console.log(e);
});

   
},

//JSON CON INFO DE CARRERAS UN EJEMPLAR POR ID DEL EJEMPALR

apiInfoCarreras: async function(req,res){
  
    let {id} = req.params;
   
 // const {dataValues: ejemplar} = await db.ejemplares.findByPk(id)

    const carreras = await db.sequelize.query(`select carrera_id, carreras.fecha, res.cuidador, res.caballeriza, res.llego_numero, res.importe, res.eje_id as idEje
    from palermo.carreras as carreras
    left join palermo.resultados as res
    on carreras.id = res.carrera_id where res.eje_id = ${id}  `, { type: QueryTypes.SELECT });/* group by ejemplares.id*/
    res.status(200).json({
        data: carreras,
         status: 200
     });
},

//JSON CON INFO DE LA ULTIMA CARRERA DE UN EJEMPALR POR ID DEL EJEMPLAR PARA OBTENER INFO DE CUIDADOR Y CABALLERIZA

apiInfoUltimaCarrera: async function(req,res){
  
    let {id} = req.params;
   
 // const {dataValues: ejemplar} = await db.ejemplares.findByPk(id)

    const ultima_carrera = await db.sequelize.query(`select carrera_id, res.cuidador, res.caballeriza, res.eje_id as idEje
    from palermo.carreras as carreras
    left join palermo.resultados as res
    on carreras.id = res.carrera_id where res.eje_id = ${id} ORDER BY carrera_id DESC LIMIT 1 `, { type: QueryTypes.SELECT });/* group by ejemplares.id*/
    res.status(200).json({
        data: ultima_carrera,
         status: 200
     });
},
}

module.exports = indexController;