
window.addEventListener("load" , function(){
  let button = document.getElementById('boton')
  let id = document.getElementById('id').value
alert(id)
let url = 'http://localhost:3002/api_ejemplar/'+ id;


alert('ok')
button.addEventListener('click' , function(){


fetch(url)
.then(function(r){
    return r.json();
})
.then(function(data){
    alert('capa mundial')
})
.catch(function(err){
  console.log(err);
});
})
})