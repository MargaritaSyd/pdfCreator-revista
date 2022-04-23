window.addEventListener("load" , function(){
let id = document.getElementById('id').value
let idMadre = document.getElementById('idMadre').value
let idPadre = document.getElementById('idPadre').value
let inputAbueloP = document.getElementById('inputAbueloP')
let inputAbuelaP = document.getElementById('inputAbuelaP')
let inputAbueloM = document.getElementById('inputAbueloM')
let inputAbuelaM = document.getElementById('inputAbuelaM')

let urlUnEjemplar = 'http://localhost:3002/api_ejemplar/';

let idAbueloM
let idAbuelaM
let idAbueloP
let idAbuelaP
let idMAbuelaM
let idPAbuelaM
let idMAbueloM
let idPAbueloM
let idMAbuelaP
let idPAbuelaP
let idMAbueloP
let idPAbueloP



//INFO MADRE + ID ABUELXS
fetch(urlUnEjemplar + idMadre)
.then(function(r){
    return r.json();
})
.then(function(data){
    let ma = JSON.stringify(data.data)
    let infoMadre = data.data
    idAbueloM = infoMadre.padre_id
    idAbuelaM = infoMadre.madre_id
    
})
.catch(function(err){
    alert(err)
})
//INFO PADRE + ID ABUELXS
fetch(urlUnEjemplar + idPadre)
.then(function(r){
    return r.json();
})
.then(function(data){
    let infoPadre = data.data
    idAbueloP = infoPadre.padre_id
    idAbuelaP = infoPadre.madre_id
    alert(idAbuelaM)
})
.catch(function(err){
    alert(err)
})
//INFO ABUELAMATERNA + ID BISABUELXS
fetch(urlUnEjemplar + idAbuelaM)
.then(function(r){
    return r.json();
})
.then(function(data){
    let infoAbulaM = data.data
    //inputAbuelaM.value = infoAbulaM.nombre
    idMAbuelaM = infoPadre.padre_id
    idPAbuelaM = infoPadre.madre_id
    
})
.catch(function(err){
    alert(err)
})



})