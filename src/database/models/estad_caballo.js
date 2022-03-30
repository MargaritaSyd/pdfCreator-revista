module.exports = function(sequelize, dataTypes)
 {
     const alias = "estad_caballo";
     const cols = {
         id: {
             type: dataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false
         },
         anio: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        ideje: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        largadas: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        ganadas: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        segundos: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        terceros: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        noplace45: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        importe: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        largadas_lpa: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        ganadas_lpa: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        segundos_lpa: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        terceros_lpa: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        noplace45_lpa: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        importe_lpa: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        largadas_pal: {
            type: dataTypes.INTEGER,
            allowNull: false
        },         
        ganadas_pal: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        segundos_pal: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        terceros_pal: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        noplace45_pal: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        importe_pal: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        largadas_sis: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        ganadas_sis: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        segundos_sis: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        terceros_sis: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        noplace45_sis: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        importe_sis: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
     };
     const config = {
         tableName: "estad_caballo",
         timestamps: false,
     };
     const estad_caballo = sequelize.define(alias, cols, config);
    //  category.associate = (models) => {
    //      category.hasMany(models.product, {
    //          as: "product",
    //          foreignKey: "id_category"
    //      })
    //  }
     return estad_caballo

    }