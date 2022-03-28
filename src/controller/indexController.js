let fs = require ('fs');
let path = require ('path');
//let productListPath = path.join(__dirname, '../dataBase/productList.json');
//let datos = fs.readFileSync (productListPath, 'utf-8');
//let db = require("../dataBase/models");
//let Op = db.Sequelize.Op;

let indexController = {
    index: function(req,res){
        res.render("index");
        
    },
    error: function(req,res) {
        res.send('error');
    }
}

module.exports = indexController;