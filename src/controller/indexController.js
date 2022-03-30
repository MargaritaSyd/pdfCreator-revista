//let fs = require ('fs');
////let path = require ('path');
//let productListPath = path.join(__dirname, '../dataBase/productList.json');
//let datos = fs.readFileSync (productListPath, 'utf-8');
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
                   
            res.render("htmlToPdf" , {criadorX , ejemplarX , madre , padre, abuelaM, abueloM, abuelaP, abueloP, mAbuelaM, pAbuelaM, mAbueloM, pAbueloM, mAbuelaP, pAbuelaP, mAbueloP, pAbueloP  })
        


        //console.log(ejemplar)
        })
    })
    /*
            for(let i=0; i<ejemplares.length; i++){
                if(ejemplares[i].id == id){
                    unEjemplar = ejemplares[i]
                }
            }
            
            //console.log(ejemplar.dataValues)
            let ejemplar = unEjemplar.dataValues;
            let madreStudId = ejemplar.madre_id;
            let padreStudId = ejemplar.padre_id;
            let madreStud
            let padreStud
            let abuelaMStud
            let abueloMStud
            let abuelaPStud
            let abueloPstud

        //Datos de la madre del ejemplar

        

            for(let i=0; i<ejemplares.length; i++){
                if(ejemplares[i].id == madreStudId){
                    madreStud = ejemplares[i]
                }
            }
            let laMadre = madreStud.dataValues;
            abuelaMId = laMadre.madre_id;
            abueloMId = laMadre.padre_id;

        //Datos del padre del ejemplar
            for(let i=0; i<ejemplares.length; i++){
                if(ejemplares[i].id == padreStudId){
                    padreStud = ejemplares[i]
                }
            }
            let elPadre = padreStud.dataValues;
            abuelaPId = elPadre.madre_id;
            abueloPId = elPadre.padre_id;

        })
        */
        
        /*

            db.ejemplares.findByPk(req.params.id)
            .then(function(ejemplar){
                db.criadores.findByPk(ejemplar.dataValues.criador_id)
           
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
                let ejemplarX = ejemplar.dataValues
                

                res.render("htmlToPdf" , {criadorX , ejemplarX})
           })
           
        })
            
            .catch(function(err){
                console.log(err)
            })
       */
        
    },

    pdfCreator: function(req,res){

        db.ejemplares.findByPk(req.params.id)
        .then(function(ejemplar){
            let elCriador = ejemplar.dataValues.criador_id  

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
                if(ejemplar.dataValues.sexo == "H"){
                    ejemplar.dataValues.sexo = "Hembra"
                } else {
                    ejemplar.dataValues.sexo = "Macho"
                }
            //Traduccion código pelo en db    
                if(ejemplar.dataValues.pelo == "ZC"){
                    ejemplar.dataValues.pelo = "Zaino Colorado" 
                }else if(ejemplar.dataValues.pelo == "A") {    
                    ejemplar.dataValues.pelo = "Alazan"
                } else if(ejemplar.dataValues.pelo == "AT") {    
                    ejemplar.dataValues.pelo = "Alazan Tostado" 
                } else if(ejemplar.dataValues.pelo == "O") {    
                    ejemplar.dataValues.pelo = "Oscuro" 
                } else if(ejemplar.dataValues.pelo == "M") {    
                    ejemplar.dataValues.pelo = "Moro" 
                } else if(ejemplar.dataValues.pelo == "R") {    
                    ejemplar.dataValues.pelo = "Rosillo" 
                } else if(ejemplar.dataValues.pelo == "T") {    
                    ejemplar.dataValues.pelo = "Tordillo" 
                } else if(ejemplar.dataValues.pelo == "Z") {    
                    ejemplar.dataValues.pelo = "Zaino" 
                } else if(ejemplar.dataValues.pelo == "ZD") {   
                    ejemplar.dataValues.pelo = "Zaino Doradillo"
                } else {    
                    ejemplar.dataValues.pelo = "Zaino Negro" 
                }
//Continua el código

            let ejemplarX = ejemplar.dataValues
            
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
           let data = {ejemplarX , criadorX};
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
   error: function(req,res) {
       res.send('error');
   }
}

module.exports = indexController;