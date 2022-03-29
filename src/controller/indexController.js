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



let indexController = {
    index: function(req,res){
        

            db.ejemplares.findByPk(req.params.id)
            .then(function(ejemplar){
             //   let elCriador = ejemplar.dataValues.criador_id  
                // if (elCriador != 0) {
                db.criadores.findByPk(ejemplar.dataValues.criador_id)
                // } 

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
                //console.log(criador)
            
            .catch(function(err){
                console.log(err)
            })
       
        
    },

    pdfCreator: function(req,res){
/*
    db.ejemplares.findByPk(req.params.id)
            .then(function(ejemplar){
                let elCriador = ejemplar.dataValues.criador_id  

                db.criadores.findByPk(elCriador)
            
            .then(function(criador){
                let criadorX = criador.dataValues
                let ejemplarX = ejemplar.dataValues
                res.render("htmlToPdf" , {criadorX , ejemplarX})
          
*/
        

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
    /*
    pdfCreator: function(req,res){
        
         db.ejemplares.findByPk(req.params.id)
         .then(function(ejemplar){
             const unEjemplar = ejemplar.dataValues
         
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
            let data = {unEjemplar};
            getTemplateHtml().then(async (res) => {
            // Now we have the html code of our template in res object
            // you can check by logging it on console
            // console.log(res)
            console.log("Compiing the template with handlebars")
            const template = hb.compile(res, { strict: true });
            // we have compile our code with handlebars
            const result = template(data.unEjemplar);
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
            //console.log("PDF Generated")
            console.log(unEjemplar)
            }).catch(err => {
            console.error(err)
            });
            }
            generatePdf();
        //res.render("index");
    })
    },
    error: function(req,res) {
        res.send('error');
    }
    */
}

module.exports = indexController;