window.addEventListener("load" , function(){
let id = document.getElementById('id').value
let idMadre = document.getElementById('idMadre').value

let urlUnEjemplar = 'http://localhost:3002/api_ejemplar/';

fetch(urlUnEjemplar + 399544)
.then(function(r){
    return r.json();
})
.then(function(data){
    alert(idMadre)
})
.catch(function(err){
    alert(err)
})

})