let db = require("../database/models");
let Op = db.Sequelize.Op;
const fs = require('fs')
const path = require('path')
const utils = require('util')
const puppeteer = require('puppeteer')
const hb = require('handlebars')
const readFile = utils.promisify(fs.readFile)

let funcionEjemplar = function(unId, bd){
    let result 
    if(unId == 0){
        result = {
            id: 0,
            nombre: 0, 
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


let indexController = {
    
    index: function(req,res){
        db.ejemplares.findAll()
        .then(function(ejemplares){
            let id = req.params.id
            //let unEjemplar
        let ejemplarX = funcionEjemplar(id,ejemplares); //DATOS DEL EJEMPLAR
        let madreId = ejemplarX.madre_id;
        let padreId = ejemplarX.padre_id;
        let madre = funcionEjemplar(madreId, ejemplares); //DATOS DE LA MADRE DEL EJEMPLAR

        
        let abuelaMId = madre.madre_id;
        let abueloMId = madre.padre_id;
        let padre = funcionEjemplar(padreId, ejemplares); //DATOS DEL PADRE DEL EJEMPLAR
        let abuelaPId = padre.madre_id;
        let abueloPId = padre.padre_id;
        let abuelaM = funcionEjemplar(abuelaMId,ejemplares); //DATOS ABUELA MATERNA
        let abueloM = funcionEjemplar(abueloMId,ejemplares); //DATOS ABUELO MATERNO
        let abuelaP = funcionEjemplar(abuelaPId,ejemplares); //DATOS ABUELA PATERNA
        let abueloP = funcionEjemplar(abueloPId,ejemplares); //DATOS ABUELO PATERNO

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
 
        //Encuentra carreras:
        db.estad_caballo.findAll({
            where: {
                ideje: ejemplarX.id
            }
        })
        .then(resultado => {
            let estadoCaballo = resultado
        
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
                   
            res.render("htmlToPdf" , {criadorX , ejemplarX , madre , padre, abuelaM, abueloM, abuelaP, abueloP, mAbuelaM, pAbuelaM, mAbueloM, pAbueloM, mAbuelaP, pAbuelaP, mAbueloP, pAbueloP, estadoCaballo  })
        


        //console.log(ejemplar)
        })
    })
})
        
    },


    pdfCreator: function(req,res){
        
          db.ejemplares.findAll()
        .then(function(ejemplares){
            let id = req.params.id

            let ejemplarX = funcionEjemplar(id,ejemplares); //DATOS DEL EJEMPLAR
            let madreId = ejemplarX.madre_id;
            let padreId = ejemplarX.padre_id;
            let madre = funcionEjemplar(madreId, ejemplares); //DATOS DE LA MADRE DEL EJEMPLAR
            
            
        let abuelaMId = madre.madre_id;
        let abueloMId = madre.padre_id;
        let padre = funcionEjemplar(padreId, ejemplares); //DATOS DEL PADRE DEL EJEMPLAR
        let abuelaPId = padre.madre_id;
        let abueloPId = padre.padre_id;
        let abuelaM = funcionEjemplar(abuelaMId,ejemplares); //DATOS ABUELA MATERNA
        let abueloM = funcionEjemplar(abueloMId,ejemplares); //DATOS ABUELO MATERNO
        let abuelaP = funcionEjemplar(abuelaPId,ejemplares); //DATOS ABUELA PATERNA
        let abueloP = funcionEjemplar(abueloPId,ejemplares); //DATOS ABUELO PATERNO

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
 

//        db.ejemplares.findByPk(req.params.id)
  //      .then(function(ejemplar){
           // let elCriador = ejemplar.dataValues.criador_id  
           let elCriador = ejemplarX.criador_id  

            db.criadores.findByPk(elCriador)
        
        .then(function(criador){
            let criadorX

            //En caso de que el id del criador no exista en bd
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

            //Traduccion hembra o macho de db
            if(ejemplarX.sexo == "H"){
                ejemplarX.sexo = "Hembra"
            } else {
                ejemplarX.sexo = "Macho"
            }
                
            //Traduccion código pelo en db    
            if(ejemplarX.pelo == "ZC"){
                ejemplarX.pelo = "Zaino Colorado" 
            }else if(ejemplarX.pelo == "A") {    
                ejemplarX.pelo = "Alazan"
            } else if(ejemplarX.pelo == "AT") {    
                ejemplarX.pelo = "Alazan Tostado" 
            } else if(ejemplarX.pelo == "O") {    
                ejemplarX.pelo = "Oscuro" 
            } else if(ejemplarX.pelo == "M") {    
                ejemplarX.pelo = "Moro" 
            } else if(ejemplarX.pelo == "R") {    
                ejemplarX.pelo = "Rosillo" 
            } else if(ejemplarX.pelo == "T") {    
                ejemplarX.pelo = "Tordillo" 
            } else if(ejemplarX.pelo == "Z") {    
                ejemplarX.pelo = "Zaino" 
            } else if(ejemplarX.pelo == "ZD") {   
                ejemplarX.pelo = "Zaino Doradillo"
            } else {    
                ejemplarX.pelo = "Zaino Negro" 
            }
            
//Continua el código

           async function getTemplateHtml() {
           console.log("Loading template file in memory")
           try {
           const invoicePath = path.resolve("./views/index.ejs");
           return await readFile(invoicePath, 'utf8');
           } catch (err) {
           //return Promise.reject("Could not load html template");
           console.log(err)
           }
           }
           async function generatePdf() {
           let data = {criadorX , ejemplarX , madre , padre, abuelaM, abueloM, abuelaP, abueloP, mAbuelaM, pAbuelaM, mAbueloM, pAbueloM, mAbuelaP, pAbuelaP, mAbueloP, pAbueloP};
           getTemplateHtml().then(async (res) => {
           // Now we have the html code of our template in res object
           // you can check by logging it on console
           // console.log(res)
           console.log("Compiing the template with handlebars")
           const template = hb.compile(res, { strict: true });
           // we have compile our code with handlebars
           const result = template(data);
           // We can use this to add dyamic data to our handlebas template at run time from database or API as per need. you can read the official doc to learn more https://handlebarsjs.com/
           const html = result;
           // we are using headless mode
           const browser = await puppeteer.launch();
           const page = await browser.newPage()
           // We set the page content as the generated html by handlebars
           await page.setContent(html)
           // We use pdf function to generate the pdf in the same folder as this file.
           await page.pdf({ 
               path: 'invoice.pdf', 
               width: "190mm",
               height: "270mm",
               // format: 'A4' 
           })
           await browser.close();
           console.log("PDF Generated")
           
           }).catch(err => {
           console.error(err)
           });
           }
           generatePdf();
       //res.render("index");
   })
})
.then(function(){
    res.send("ok")
})
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
   }
}

module.exports = indexController;