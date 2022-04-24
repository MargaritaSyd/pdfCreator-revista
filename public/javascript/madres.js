window.addEventListener('load' , function(){
let id = document.getElementById('id').value
let urlUnEjemplar = 'http://localhost:3002/api_ejemplar/';
let urlHijos = 'http://localhost:3002/api_hijos/';
let urlResultadosHijo = 'http://localhost:3002/api_resultados_hijos/'

let idMadre
let arrayHijos = []
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
            fetch(urlResultadosHijo + idI)
            .then(function(r){
                return r.json();
            })
            .then(function(data){
                //alert('ok el resultado')
              arrayHijos.push(data)
            })  
            .catch(function(err){
                alert(err + 'resultadosHijos')
            })
            .then(function(){
                let resultados = JSON.stringify(arrayHijos)
                alert(resultados)
            })
        }
    })
    .catch(function(err){
        alert(err + 'hijos primera madre')
    })
    .then(function(){
        alert(arrayHijos)
    })

})
})