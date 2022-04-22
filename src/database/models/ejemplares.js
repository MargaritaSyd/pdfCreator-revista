module.exports = function(sequelize, dataTypes)
 {
     const alias = "ejemplares";
     const cols = {
         id: {
             type: dataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false
         },
         nombre: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        anio_nac: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        mes_nac: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        dia_nac: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        sexo: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        pelo: {
            type: dataTypes.STRING,
            allowNull: false
        },
        raza: {
            type: dataTypes.STRING,
            allowNull: false
        },
        criador_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        padre_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        madre_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        padre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        madre: {
            type: dataTypes.STRING,
            allowNull: false
        },

        foto: {
            type: dataTypes.STRING,
            allowNull: true
        },
        muestra: {
            type: dataTypes.STRING,
            allowNull: false
        },
        muestra_ejemplar: {
            type: dataTypes.STRING,
            allowNull: false
        },
        muestra_padres: {
            type: dataTypes.STRING,
            allowNull: false
        },
        familia: {
            type: dataTypes.STRING,
            allowNull: false
        },
        debutante: {
            type: dataTypes.STRING,
            allowNull: false
        },
        
     };
     const config = {
         tableName: "ejemplares",
         timestamps: false,
     };
     const ejemplares = sequelize.define(alias, cols, config);
    //  category.associate = (models) => {
    //      category.hasMany(models.product, {
    //          as: "product",
    //          foreignKey: "id_category"
    //      })
    //  }
     return ejemplares

 }