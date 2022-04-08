module.exports = function(sequelize, dataTypes)
 {
     const alias = "carreras";
     const cols = {
         id: {
             type: dataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false
         },
         ncrp: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        hipodromo: {
            type: dataTypes.STRING,
            allowNull: false
        },
        fecha: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        carrera: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        hora: {
            type: dataTypes.STRING,
            allowNull: false
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        grupo: {
            type: dataTypes.STRING,
            allowNull: false
        },
        sexo: {
            type: dataTypes.STRING,
            allowNull: false
        },
        valor_tot: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        distancia: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_1: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_2: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_3: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_4: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_5: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_6: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_7: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_8: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_9: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_10: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_11: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_12: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_13: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_14: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_15: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_16: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_17: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_18: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_19: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        valor_20: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        pista: {
            type: dataTypes.STRING,
            allowNull: false
        },
        minutos: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        segundos: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        centesimas: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        partic: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        extra: {
            type: dataTypes.STRING,
            allowNull: false
        },
        viento: {
            type: dataTypes.STRING,
            allowNull: false
        },
        tipo_pista: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        codo: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        tipo_car: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        tiempo6: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        condicion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        apuestas1: {
            type: dataTypes.STRING,
            allowNull: false
        },
        apuestas2: {
            type: dataTypes.STRING,
            allowNull: false
        },
        //favorita_1: {
         //   type: dataTypes.INTEGER,
        //    allowNull: false
       // },
        //favorita_2: {
        //    type: dataTypes.INTEGER,
         //   allowNull: false
       // },
        //favorita_3: {
        //    type: dataTypes.INTEGER,
        //    allowNull: false
       // },
        indice: {
            type: dataTypes.STRING,
            allowNull: false
        },
        nombre_2: {
            type: dataTypes.STRING,
            allowNull: false
        },
        //favorita_4: {
        //    type: dataTypes.INTEGER,
        //    allowNull: false
       // },
        categoria: {
            type: dataTypes.STRING,
            allowNull: false
        },
        video: {
            type: dataTypes.STRING,
            allowNull: false
        },
        valorizada: {
            type: dataTypes.STRING,
            allowNull: false
        },
        sin_desc: {
            type: dataTypes.STRING,
            allowNull: false
        },
        tramo1: {
            type: dataTypes.STRING,
            allowNull: false
        },
        tramo2: {
            type: dataTypes.STRING,
            allowNull: false
        },
        tramo3: {
            type: dataTypes.STRING,
            allowNull: false
        },
        tramo4: {
            type: dataTypes.STRING,
            allowNull: false
        },
        tramo5: {
            type: dataTypes.STRING,
            allowNull: false
        },
        tramo6: {
            type: dataTypes.STRING,
            allowNull: false
        },
        Internet_ready: {
            type: dataTypes.STRING,
            allowNull: false
        },
        cronica: {
            type: dataTypes.STRING,
            allowNull: false
        },
        palermo_2: {
            type: dataTypes.STRING,
            allowNull: false
        },
        lanacion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        simulcasting: {
            type: dataTypes.STRING,
            allowNull: false
        },
        palos_falsos: {
            type: dataTypes.STRING,
            allowNull: false
        },
        edad_1: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        edad_2: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        edad1_plus: {
            type: dataTypes.STRING,
            allowNull: false
        },
        ppe: {
            type: dataTypes.STRING,
            allowNull: false
        },
        raza: {
            type: dataTypes.STRING,
            allowNull: false
        },
        libre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        chaquetillas: {
            type: dataTypes.STRING,
            allowNull: false
        },
        cond_tab: {
            type: dataTypes.STRING,
            allowNull: false
        },
        fav_rn_1: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        fav_rn_2: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        fav_rn_3: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        fav_rn_4: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        popular: {
            type: dataTypes.STRING,
            allowNull: false
        },
        totbol: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        favorito1_bis: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        web: {
            type: dataTypes.STRING,
            allowNull: false
        },
        favorito2_bis: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        favorito3_bis: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        favorito4_bis: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        fav_1_dia: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        fav_2_dia: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        fav_3_dia: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        fav_4_dia: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        fav_5_dia: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        favorito_1_v: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        favorito_2_v: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        favorito_3_v: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        favorito_4_v: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        nombre_corto_momentos: {
            type: dataTypes.STRING,
            allowNull: false
        },
        video_fecha: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        video_enlace: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        del_dia: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
     };
     const config = {
         tableName: "carreras",
         timestamps: false,
     };
     const carreras = sequelize.define(alias, cols, config);
    //  category.associate = (models) => {
    //      category.hasMany(models.product, {
    //          as: "product",
    //          foreignKey: "id_category"
    //      })
    //  }
     return carreras

    }