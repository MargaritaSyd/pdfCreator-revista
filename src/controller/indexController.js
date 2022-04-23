let db = require("../database/models");
let Op = db.Sequelize.Op;
const fs = require('fs')
const path = require('path')
const utils = require('util')
const puppeteer = require('puppeteer')
const hb = require('handlebars');
const readFile = utils.promisify(fs.readFile)

/*

let funcionHijosGanadores = function(array){
    let arrayNuevo = []
    for(let i=0; i<array.length; i++){
        arrayNuevo.push(array[i].id)
    } 
    return arrayNuevo
}


let funcionEjemplareshijos = function(id , bd){
    let hijos = [];
    for(let i=0; i<bd.length; i++){
        if(bd[i].madre_id == id){
            hijos.push(bd[i].dataValues)
        }
    }
return hijos
}

let funcionEjemplar = function(unId, bd){
    let result 
    if(unId == 0){
        result = {
            id: 0,
            nombre: "", 
           anio_nac: 0,
           mes_nac: 0,
           dia_nac: 0,
           sexo: 0, 
           pelo: 0,
           raza: 0,
           criador_id: 0,
           padre_id: 0,
           madre_id: 0,
           padre: 0,
           madre: 0,
           foto: 0,
           muestra: 0,
           muestra_ejemplar: 0,
           muestra_padres: 0,
           familia: 0,
           debutante: 0,

        }
    } else {
    for(let i=0; i<bd.length; i++){
        if(bd[i].id == unId){

            result = bd[i].dataValues
        }
    }
}
    return result
}
*/

let indexController = {
  /*  
    index: function(req,res){
        db.ejemplares.findAll()
        .then(function(ejemplares){
            let id = req.params.id
            console.log(id)
            //let unEjemplar
        let ejemplarX = funcionEjemplar(id,ejemplares); //DATOS DEL EJEMPLAR
        let madreId = ejemplarX.madre_id;
        let padreId = ejemplarX.padre_id;
        let madre = funcionEjemplar(madreId, ejemplares); //DATOS DE LA MADRE DEL EJEMPLAR
        
        let hijos1Madre = funcionEjemplareshijos(madreId , ejemplares)

        
        let abuelaMId = madre.madre_id;
        let abueloMId = madre.padre_id;
        let padre = funcionEjemplar(padreId, ejemplares); //DATOS DEL PADRE DEL EJEMPLAR
        let abuelaPId = padre.madre_id;
        let abueloPId = padre.padre_id;
        let abuelaM = funcionEjemplar(abuelaMId,ejemplares); //DATOS ABUELA MATERNA
        let abueloM = funcionEjemplar(abueloMId,ejemplares); //DATOS ABUELO MATERNO
        let abuelaP = funcionEjemplar(abuelaPId,ejemplares); //DATOS ABUELA PATERNA
        let abueloP = funcionEjemplar(abueloPId,ejemplares); //DATOS ABUELO PATERNO
        
        let hijos2Madre = funcionEjemplareshijos(abuelaMId , ejemplares)



        let mAbuelaMId = abuelaM.madre_id;
        let pAbuelaMId = abuelaM.padre_id;
        let mAbueloMId = abueloM.madre_id;
        let pAbueloMId = abueloM.padre_id;
        let mAbuelaPId = abuelaP.madre_id;
        let pAbuelaPId = abuelaP.padre_id;
        let mAbueloPId = abueloP.madre_id;
        let pAbueloPId = abueloP.padre_id;

        let mAbuelaM = funcionEjemplar(mAbuelaMId,ejemplares); // DATOS BISABUELXS
        let pAbuelaM = funcionEjemplar(pAbuelaMId,ejemplares);
        let mAbueloM = funcionEjemplar(mAbueloMId,ejemplares);
        let pAbueloM = funcionEjemplar(pAbueloMId,ejemplares);
        let mAbuelaP = funcionEjemplar(mAbuelaPId,ejemplares);
        let pAbuelaP = funcionEjemplar(pAbuelaPId,ejemplares);
        let mAbueloP = funcionEjemplar(mAbueloPId,ejemplares);
        let pAbueloP = funcionEjemplar(pAbueloPId,ejemplares);
        
        let madre4Id = mAbuelaM.madre_id
        let madre4 = funcionEjemplar(madre4Id,ejemplares); // DATOS BISABUELXS
        let madre5Id = madre4.madre_id
        let madre5 = funcionEjemplar(madre5Id, ejemplares);
        let madre6Id = madre5.madre_id
        let madre6 = funcionEjemplar(madre6Id , ejemplares);
        
        let hijos3Madre = funcionEjemplareshijos(mAbuelaMId , ejemplares);
        let hijos4Madre = funcionEjemplareshijos(madre4Id, ejemplares);
        let hijos5Madre = funcionEjemplareshijos(madre5Id , ejemplares);
        let hijos6Madre = funcionEjemplareshijos(madre6Id, ejemplares);

        // Encuentra flias importantes:

    
        let id_hijos1M = funcionHijosGanadores(hijos1Madre)      
        let id_hijos2M = funcionHijosGanadores(hijos2Madre)
        let id_hijos3M = funcionHijosGanadores(hijos3Madre)
        let id_hijos4M = funcionHijosGanadores(hijos4Madre)
        let id_hijos5M = funcionHijosGanadores(hijos5Madre)
        let id_hijos6M = funcionHijosGanadores(hijos6Madre)
        
        
        
        db.carreras.findAll()
            .then(c=> {
                let carreras = c      
         
            db.resultados.findAll({
                where:{

                    llego_numero: 1
                    // llego_numero: {
                    //     [Op.lte]: 3
                    // }
                       
                }
                
            })
            .then(resultado => {

                console.log('ok')
               
                // let madre y padre carreras ganadas

                let resultadoMadresGanadorasFunction = function(id){
                    let carrerasMadres = []
                    for(let j=0; j<resultado.length; j++){
                        if(resultado[j].eje_id == id){
                            let unResultado = resultado[j]
                           let unaCarrera = funcionEjemplar(unResultado.carrera_id, carreras)
                           if(unaCarrera.grupo == 'I'){
                            unaCarrera.grupo = 'G.I'
                         } else if(unaCarrera.grupo == 'II'){
                            unaCarrera.grupo = 'G.II'
                         } else if(unaCarrera.grupo == 'III'){
                            unaCarrera.grupo = 'G.III'
                         } else {
                            unaCarrera.grupo = unaCarrera.grupo
                         }
                         const madreGanador = new Object()
                         
                         madreGanador.fechaCarrera = unaCarrera.fecha
                         madreGanador.nombreCarrera = unaCarrera.nombre
                         madreGanador.grupoCarrera = unaCarrera.grupo
                         madreGanador.hipodromo = unaCarrera.hipodromo

                         carrerasMadres.push(madreGanador)

                        }
                    }
                    return carrerasMadres
                }


                 //  hijos de la madre que ganaron carreras:
                 let resultadoHijosGanadoresFunction = function(array){

                let resultadosCarreras = []
                   array.forEach(e => {
                     for(let j=0; j<resultado.length; j++){
                         if(resultado[j].eje_id == e){
                             let unHijo = funcionEjemplar(e,ejemplares)
                             let unResultado = resultado[j]
                             let unaCarrera = funcionEjemplar(unResultado.carrera_id, carreras)
                             if(unaCarrera.grupo == 'I'){
                                unaCarrera.grupo = 'G.I'
                             } else if(unaCarrera.grupo == 'II'){
                                unaCarrera.grupo = 'G.II'
                             } else if(unaCarrera.grupo == 'III'){
                                unaCarrera.grupo = 'G.III'
                             } else {
                                unaCarrera.grupo = unaCarrera.grupo
                             }
                            const hijoGanador = new Object()
                            hijoGanador.nombre = unHijo.nombre
                            hijoGanador.nac = unHijo.anio_nac
                            hijoGanador.padre = unHijo.padre
                            hijoGanador.sexo = unHijo.sexo
                            hijoGanador.fechaCarrera = unaCarrera.fecha
                            hijoGanador.nombreCarrera = unaCarrera.nombre
                            hijoGanador.grupoCarrera = unaCarrera.grupo
                            hijoGanador.hipodromo = unaCarrera.hipodromo
                            //   resultadosCarrerasHijos1M.push(hijoGanador)
                           resultadosCarreras.push(hijoGanador)
                       
                         }
                     }
                   })
                   return resultadosCarreras
                }

                 let resultadosCarrerasHijos1M = resultadoHijosGanadoresFunction(id_hijos1M)
                let resultadosCarrerasHijos2M = resultadoHijosGanadoresFunction(id_hijos2M)
                let resultadosCarrerasHijos3M = resultadoHijosGanadoresFunction(id_hijos3M )
                let resultadosCarrerasHijos4M = resultadoHijosGanadoresFunction(id_hijos4M )
                let resultadosCarrerasHijos5M = resultadoHijosGanadoresFunction(id_hijos5M )
                let resultadosCarrerasHijos6M = resultadoHijosGanadoresFunction(id_hijos6M )
                let resultadoCarrerasMadre = resultadoMadresGanadorasFunction(madreId)
                let resultadoCarrerasPadre = resultadoMadresGanadorasFunction(padreId)
              

        
        
        //Encuentra ganancias totales, carreras corridas del ejemplar 

        let resultadoCarreras
        db.resultados.findAll({
            where:{
                eje_id: ejemplarX.id
            }
        })
        .then(resultado => {
            resultadoCarreras = resultado
            let arrayGanancias = []
            let arrayGanadas = []
            let arraySegundos = []
            let arrayTerceros = []
            let totalLargadas = resultadoCarreras.length
            let arrayCarreras = []
            let ultimaCarrera = resultadoCarreras[resultadoCarreras.length-1]
            let cuidador_id = ultimaCarrera.cuidador
            let caballeriza_id = ultimaCarrera.caballeriza




           // let arrayLargadas = []
            for(let i=0; i<resultadoCarreras.length; i++){
            arrayGanancias.push(resultadoCarreras[i].importe)
            arrayCarreras.push(resultadoCarreras[i].carrera_id)
            if(resultadoCarreras[i].llego_numero == 1){
                arrayGanadas.push(resultadoCarreras[i].llego_numero)
            }
            if(resultadoCarreras[i].llego_numero == 2){
                arraySegundos.push(resultadoCarreras[i].llego_numero)
            }
            if(resultadoCarreras[i].llego_numero == 3){
                arrayTerceros.push(resultadoCarreras[i].llego_numero)
            } 
            
           // arrayGanancias.push()
        }
        const totalGanancias = arrayGanancias.reduce((a,b)=> a+b);
        const totalSegundos = arraySegundos.length
        const totalGanadas = arrayGanadas.length
        const totalTerceros = arrayTerceros.length

        //})
        //Creando array de carreras jugadas por el ejemplar
      let anioCarreras = []
      
        for(let i=0; i<arrayCarreras.length; i++){

            db.carreras.findByPk(arrayCarreras[i])
            .then(carrera => {
                anioCarreras.push(carrera.fecha.slice(0,-6))
                
        })
        .catch (err  =>{
            
            console.log(err)
            })
    }

    let anios = anioCarreras.sort(function(a,b){return a-b})
    
    //obtengo cuidadir y y caballeriza
    db.profesionales.findByPk(cuidador_id)
    .then(resultado => {
        let cuidador = resultado.descripcion
      
        db.profesionales.findByPk(caballeriza_id)
        .then(resultado => {
            let caballeriza = resultado.descripcion
        
        
        
            
        
        //Encuentra carreras:
        let estadoCaballo
        db.estad_caballo.findAll({
            where: {
                ideje: ejemplarX.id
            }
        })
        
        .then(resultado => {
             estadoCaballo = resultado

             
   
            
        //Encuentra el criador:
        db.criadores.findByPk(ejemplarX.criador_id)
        .then(function(criador){
            let criadorX
            if(!criador){
                criadorX = {
                    id: 0,
                    propietario: "N/N",
                    haras: "N/N",
                    banner: "N/N"
                }
            } else {
                criadorX = criador.dataValues
            }
            console.log(JSON.stringify(estadoCaballo))
                   
            res.render("htmlToPdf" , {resultadoCarrerasMadre, resultadoCarrerasPadre, resultadosCarrerasHijos1M, resultadosCarrerasHijos2M, resultadosCarrerasHijos3M, resultadosCarrerasHijos4M, resultadosCarrerasHijos5M, resultadosCarrerasHijos6M, anios, caballeriza ,cuidador, criadorX , ejemplarX , anioCarreras, madre , padre, abuelaM, abueloM, abuelaP, abueloP, mAbuelaM, pAbuelaM, mAbueloM, pAbueloM, mAbuelaP, pAbuelaP, mAbueloP, pAbueloP, estadoCaballo, totalGanadas, totalLargadas, totalGanancias, totalSegundos, totalTerceros, hijos1Madre, hijos2Madre, hijos3Madre, hijos4Madre, hijos5Madre, hijos6Madre, madre4, madre5, madre6  })
        

           
//console.log(resultadoPadrillo)
        })
    })
})
})
})  
})
})
})
.catch(function(err){
    console.log(err)
})
        
    },
    


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
        console.log(inputName)
                            // });
                    // });

            // // })
            // .then(function () {
            //     res.redirect("/");
            // });
    },

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
                            // });
                    // });

            // // })
            // .then(function () {
            //     res.redirect("/");
            // });
    },
   /*
   
   apiEjempalares: function(req,res){
       db.ejemplares.findAll()
       .then(ejemplar => {
           let ejemplarArray = [];
           for(let i=0; i<ejemplar.length; i++){
            let unEjemplar = {
               id: ejemplar[i].id,
               nombre: ejemplar[i].nombre, 
              anio_nac: ejemplar[i].anio_nac,
              mes_nac: ejemplar[i].mes_nac,
              dia_nac: ejemplar[i].dia_nac,
              sexo: ejemplar[i].sexo, 
              pelo: ejemplar[i].pelo,
              raza: ejemplar[i].raza,
              criador_id: ejemplar[i].criador_id,
              padre_id: ejemplar[i].padre_id,
              madre_id: ejemplar[i].madre_id,
              padre: ejemplar[i].padre,
              madre: ejemplar[i].madre,
              foto: ejemplar[i].foto,
              muestra: ejemplar[i].muestra,
              muestra_ejemplar: ejemplar[i].muestra_ejemplar,
              muestra_padres: ejemplar[i].muestra_padres,
              familia: ejemplar[i].familia,
              debutante: ejemplar[i].debutante,
   
           } 
           ejemplarArray.push(unEjemplar);
        }
        return res.status(200).json({
            count: ejemplarArray.length,
            ejemplares: ejemplarArray,
            status: 200
        })
       

       })
       .catch(function(err){
           console.log(err)
       })
       
   },
   */

   error: function(req,res) {
       res.send('error');
   },
   
   ok: function(req,res) {
       let id = req.params.id
       res.render("ok" , {id})
   },
   okForm: function(req,res){
    let inputs = req.body.descriptEjemplar;
    console.log(inputs);
    //res.send('ok')
   },

      
   apiEjemplares: function(req,res){
  //  let ejemplaresTodos = [];
    db.ejemplares.findAll({
        attributes: ['id','nombre','anio_nac','mes_nac','dia_nac','sexo','pelo','raza','criador_id','padre_id','madre_id','padre','madre','mes_nac','dia_nac','sexo','pelo','raza', 'criador_id', 'padre_id','madre_id','padre','madre'],
        raw: true,
        nest: true
        
    })
//     console.log('findall')
        .then( losEjemplares => {
            /*
          //  console.log(losEjemplares);

            for(let i=0; i<losEjemplares.length; i++){
             //   console.log('ok el for')
                let unEJemplar = {
                id: losEjemplares[i].id,
                nombre: losEjemplares[i].nombre, 
                anio_nac: losEjemplares[i].anio_nac,
                mes_nac: losEjemplares[i].mes_nac,
                dia_nac: losEjemplares[i].dia_nac,
                sexo: losEjemplares[i].sexo, 
                pelo: losEjemplares[i].pelo,
                raza: losEjemplares[i].raza,
                criador_id: losEjemplares[i].criador_id,
                padre_id: losEjemplares[i].padre_id,
                madre_id: losEjemplares[i].madre_id,
                padre: losEjemplares[i].padre,
                madre: losEjemplares[i].madre,
                
                
            };
                ejemplaresTodos.push(unEJemplar);
            }
          //  console.log(ejemplaresTodos.length);
             console.log(ejemplaresTodos);
        })
        .then(function (){
            */
            return res.status(200).json({
                count: losEjemplares.length,
                data: losEjemplares,
                status: 200
            });
        
        }) 
        .catch(function(err){
             console.log(err);
        });
       // res.send('ok');
},


apiEjemplar: function(req,res){
    let id = req.params.id;
    db.ejemplares.findByPk(id , {
        attributes: ['id','nombre','anio_nac','mes_nac','dia_nac','sexo','pelo','raza','criador_id','padre_id','madre_id','padre','madre','mes_nac','dia_nac','sexo','pelo','raza', 'criador_id', 'padre_id','madre_id','padre','madre']      
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
apiCarreras: function(req,res){
    console.log('ok');
   
  // let arrayCarreras = [];
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
apiUnResultado: function(req,res){
    console.log('ok');
    let id = req.params.id;
   //let arrayResult = [];
   db.resultados.findAll({
        where: {
            eje_id: id
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
apiUnCriador: function(req,res){
    console.log('ok');
    let id = req.params.id;
   //let arrayResult = [];
   db.criadores.findByPk(id,{
       
        attributes: ['id', 'haras'],
      
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
}

module.exports = indexController;