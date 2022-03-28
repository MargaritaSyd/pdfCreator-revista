module.exports = function(sequelize, dataTypes)
 {
     const alias = "criadores";
     const cols = {
         id: {
             type: dataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false
         },
         propietarios: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        haras: {
            type: dataTypes.STRING,
            allowNull: false
        },
        banners: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
    };
     const config = {
         tableName: "criadores",
         timestamps: false,
        };
        const criadores = sequelize.define(alias, cols, config);
       //  category.associate = (models) => {
       //      category.hasMany(models.product, {
       //          as: "product",
       //          foreignKey: "id_category"
       //      })
       //  }
        return criadores
   
    }