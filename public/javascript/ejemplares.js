
window.addEventListener("load" , function(){
  let pdf1 = document .getElementById('pdf1');
  let form = document.getElementById('form')
  
  let id = document.getElementById('id').value
  let nombreDelEjemplar = document.getElementById('nombreDelEjemplar')
  let inputNombreDelEjemplar = document.getElementById('inputNombreDelEjemplar')
//alert(id)
let url = 'http://localhost:3002/api_ejemplar/'+ id;

pdf1.addEventListener('click' , function(){
  form.action = '/ok_form'
})

fetch(url)
.then(function(r){
    return r.json();
})
.then(function(data){
  /*
   <%=ejemplarX.sexo%>, <%=ejemplarX.pelo%>, nacido el <%=ejemplarX.dia_nac%> de <%=ejemplarX.mes_nac%> de <%=ejemplarX.anio_nac%> - <%=ejemplarX.familia%>
  */
    //Recupero del ejemplar buscado su info con api_ejemplar/:id 
/*
    sexo = data.data.sexo;
    pelo = data.data.pelo;
    mes_nac = data.data.mes_nac;
    if(sexo == "H"){ 
      sexo = "Hembra"
    } else {
        sexo = "Macho"
    }
    if(pelo == "ZC"){
         pelo = "Zaino Colorado"
      } else if(pelo == "A") {
        pelo = "Alazan"
      } else if(pelo == "AT") {
        pelo = "Alazan Tostado" 
      } else if(pelo == "O") {
        pelo = "Oscuro"
      } else if(pelo == "M") {    
        pelo = "Moro"
      } else if(pelo == "R") {
        pelo = "Rosillo" 
      } else if(pelo == "T") {
        pelo = "Tordillo"
      } else if(pelo == "Z") {   
        pelo = "Zaino" 
      } else if(pelo == "ZD") {    
        pelo = "Zaino Doradillo" 
      } else {    
        pelo = "Zaino Negro"  
      }

      if(mes_nac == 1){ 
        mes_nac = "Enero" 
      } else if(mes_nac == 2) {    
        mes_nac = "Febrero"
      } else if(mes_nac == 3) {    
        mes_nac = "Marzo" 
      } else if(mes_nac == 4) {    
        mes_nac = "Abril" 
      } else if(ejemplarX.mes_nac == 5) {    
        mes_nac = "Mayo" 
      } else if(ejemplarX.mes_nac == 6) {
        mes_nac = "Junio"
      } else if(ejemplarX.mes_nac == 7) {    
        mes_nac = "Julio" 
      } else if(mes_nac == 8) {   
        mes_nac = "Agosto" 
      } else if(ejemplarX.mes_nac == 9) {
        mes_nac = "Septiembre"
      } else if(mes_nac == 10) {    
        mes_nac = "Octubre" 
      } else if(mes_nac == 11) { 
        mes_nac = "Noviembre"
      } else {    
        mes_nac = "Diciembre"  
      }
*/
    
    nombre = data.data.nombre;
    
    dia_nac = data.data.dia_nac;
   
    anio_nac = data.data.anio_nac;

    nombreDelEjemplar.innerHTML = nombre
    inputNombreDelEjemplar.value = nombre
    alert(pelo)
})
.catch(function(err){
  console.log(err);
});

//nombreDelEjemplar.innerHTML = nombre


})
//})