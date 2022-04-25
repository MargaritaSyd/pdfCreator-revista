window.addEventListener('load' , function(){
let id = document.getElementById('id').value
let urlUnEjemplar = 'http://localhost:3002/api_ejemplar/';
let urlHijos = 'http://localhost:3002/api_hijos/';
let urlResultadosHijo = 'http://localhost:3002/api_resultados_hijos/'

let idMadre
let arrayHijos = [];
idCarreras = [];
let nombreI
               

    
//TRAIGO INFO DEL EJEMPLAR PARA TENER INFO DE SU 1 MADRE
fetch(urlUnEjemplar + id)
.then(function(r){
    return r.json();
})
.then(function(data){
    let infoEjemplar = data.data
    idMadre = infoEjemplar.madre_id
    alert(idMadre + 'capa mundial')
})
.catch(function(err){
    alert(err + 'ejemplar')
})
//TRAIGO INFO DE HIJOS DE LA PRIMERA MADRE
.then(function(){
    fetch(urlHijos + idMadre)
    .then(function(r){
        return r.json();
    })
    .then(function(data){
        let datadata = data.data
        for(i of datadata){
            let idI = i.id
            let nombreHijo = i.nombre
            fetch(urlResultadosHijo + idI)
            .then(function(r){
                return r.json();
            })
            
            .then(function(data){
 
let arrayLlego1 = [];
let arrayLlego2 = [];
let arrayLlego3 = [];

             for(i of data.data){
                 if(i.llego_numero == 1){
                    arrayLlego1.push(i.carrera_id)
                 } else if (i.llego_numero == 2){
                     arrayLlego2.push(i.carrera_id)
                 } else {
                     arrayLlego3.push(i.carrera_id)
                 }
               
 
             }
             const resultadoHijo = new Object();
             resultadoHijo.id = idI;
             resultadoHijo.nombre = nombreHijo
             //resultadoHijo.hipodromo = 50;
             resultadoHijo.primero = arrayLlego1;
             resultadoHijo.segundo = arrayLlego2;
             resultadoHijo.tercero = arrayLlego3;
             let res = JSON.stringify(resultadoHijo)
             alert(res)
            })  
            .catch(function(err){
                alert(err + 'resultadosHijos')
            })
            /*
            .then(function(){
                const resultadoHijo = new Object();
                resultadoHijo.id = idI;
                resultadoHijo.nombre = nombreHijo
                //resultadoHijo.hipodromo = 50;
                resultadoHijo.primero = arrayLlego1;
                resultadoHijo.segundo = arrayLlego2;
                resultadoHijo.tercero = arrayLlego3;

            })
            */
            .then(function(){
                alert(resultadoHijo)
            })
        }
       
    })
   
    .catch(function(err){
        alert(err + 'hijos primera madre')
    })
   

})
/*
Promise.all([arrayLlego1, arrayLlego2, arrayLlego3])
.then(function(){
    alert(arrayLlego1 + 'este es el nombre')
})
*/
})

/*
                const resultadoHijo = new Object();
                resultadoHijo.id = "John";
                resultadoHijo.nombre = "Doe";
                resultadoHijo.hipodromo = 50;
                resultadoHijo.llego_numero = "blue";
                */