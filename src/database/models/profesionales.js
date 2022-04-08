module.exports = function(sequelize, dataTypes)
 {
     const alias = "profesionales";
     const cols = {
         id: {
             type: dataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false
         },
         tipo: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        recargo: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        muestra: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        foto: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        mostrar: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        suspendido: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        suspendido_desde: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        suspendido_hasta: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        muestra_sis: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        muestra_pal: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        muestra_lpa: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        juego_costo: {
            type: dataTypes.STRING,
            allowNull: true
        }, 
        juego_premio: {
            type: dataTypes.STRING,
            allowNull: true
        }, 
    };
     const config = {
         tableName: "profesionales",
         timestamps: false,
        };
        const profesionales = sequelize.define(alias, cols, config);
       //  category.associate = (models) => {
       //      category.hasMany(models.product, {
       //          as: "product",
       //          foreignKey: "id_category"
       //      })
       //  }
        return profesionales
   
    }