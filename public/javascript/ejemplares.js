
window.addEventListener("load" , function(){
  let button = document.getElementById('boton')
  let id = document.getElementById('id').value
  let nombreDelEjemplar = document.getElementById('nombreDelEjemplar')
alert(id)
let url = 'http://localhost:3002/api_ejemplar/'+ id;
//let ejemplar


alert('ok')
//button.addEventListener('click' , function(){


fetch(url)
.then(function(r){
    return r.json();
})
.then(function(data){
  
    //ejemplar = data.nombre
    let ladata = JSON.stringify(data)
    let ejemplar = ladata.data
    let stringEjemplar = JSON.stringify(ejemplar)
    //let nombre = ladata.data.nombre
    alert(ladata)
})
.catch(function(err){
  console.log(err);
});

//nombreDelEjemplar.innerHTML = data.nombre


})
//})