module.exports = function(sequelize, dataTypes)
 {
     const alias = "resultados";
     const cols = {
         id: {
             type: dataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false
         },
         carrera_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        eje_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        largo_numero: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        yunta: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        llego_real: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        llego_numero: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        cuidador: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        jockey: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        kilos: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        kilos_orig: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        recargo: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        caballeriza: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        cuerpos: {
            type: dataTypes.STRING,
            allowNull: false
        },
        pagaria: {
            type: dataTypes.INTEGER,
            allowNull: false
        },  
        pagaria_provisorio: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        importe: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        extra: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        peso_del_ejemplar: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        medicamento1: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        medicamento2: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        medicamento3: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        diferencia1: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        diferencia2: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        diferencia3: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        diferencia4: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        diferencia5: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        comentario: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        diferencia6: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        comentario_grafica: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        boletos: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        lean_com: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        lean_entr: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        caballitos: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        quecat: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        incidencia: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        // centototales: {
        //     type: dataTypes.INTEGER,
        //     allowNull: false
        // }, 
        herraje: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        m1: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        m2: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        m3: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        m4: {
            type: dataTypes.INTEGER,
            allowNull: false
        },  
        m5: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        m6: {
            type: dataTypes.INTEGER,
            allowNull: false
        },  
        leanc_tit: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        leanc_antec: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        leanc_chan: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        leane_eje: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        leane_part: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        resu_int: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        m_de_gloria: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        veterinaria: {
            type: dataTypes.STRING,
            allowNull: false
        },
        calificacion: {
            type: dataTypes.STRING,
            allowNull: false
        },  
        suplente: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        rating: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        i_jockey: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        i_cuidador: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        i_caballeriza: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        i_fecha: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        i_linea: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        i_ejemplar: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        del_dia: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
     };
     const config = {
         tableName: "resultados",
         timestamps: false,
     };
     const resultados = sequelize.define(alias, cols, config);
    //  category.associate = (models) => {
    //      category.hasMany(models.product, {
    //          as: "product",
    //          foreignKey: "id_category"
    //      })
    //  }
     return resultados
    }