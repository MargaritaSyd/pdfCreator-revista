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
        /*
        db.ejemplares.findByPk(req.params.id)
        .then(function(ejemplar){
            res.render("index" , {ejemplar})
        })
        */
/*
            let unEjemplar = db.ejemplares.findByPk(req.params.id)
         //   let elCriador = unEjemplar.dataValues.criador_id
            let criador = db.criadores.findByPk(elCriador)
            Promise.all([unEjemplar , criador])
            .then(function([unEjemplar , criador]){
                console.log(criador)
                //res.render("index" , {unEjemplar , criadores})
            })
            .catch(function(err){
                console.log(err)
            })


       */

            db.ejemplares.findByPk(req.params.id)
            .then(function(ejemplar){
                let elCriador = ejemplar.dataValues.criador_id  

                db.criadores.findByPk(elCriador)
            
            .then(function(criador){
                let criadorX = criador.dataValues
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
}

module.exports = indexController;