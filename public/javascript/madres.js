window.addEventListener('load' , function(){
let id = document.getElementById('id').value
let urlUnEjemplar = 'http://localhost:3002/api_ejemplar/';

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
})