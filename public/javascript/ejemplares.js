
window.addEventListener("load" , function(){
  let pdf1 = document .getElementById('pdf1');
  let pdf2 = document.getElementById('pdf2');
  let form = document.getElementById('form')
  
  //recupero id para llamar a la api_ejemplar/:id
  let id = document.getElementById('id').value
  //capturo campos a completas con la info del ejemplar+inputs correspondientes
  let nombreDelEjemplar = document.getElementById('nombreDelEjemplar');
  let inputNombreDelEjemplar = document.getElementById('inputNombreDelEjemplar');
  let descriptDelEjemplar = document.getElementById('descriptDelEjemplar');
  let inputDescriptDelEjemplar = document.getElementById('inputDescriptDelEjemplar');
  let criador = document.getElementById('criador');
  let inputCriador = document.getElementById('inputCriador');
 
  let padreEjemplar =document.getElementById('padreEjemplar');
  let idMadre = document.getElementById('idMadre');
  let idPadre = document.getElementById('idPadre');
  
 

  //alert(id)
let urlUnEjemplar = 'http://localhost:3002/api_ejemplar/';
let urlUnCriador = 'http://localhost:3002/api_criador/';

pdf1.addEventListener('click' , function(){
  form.action = '/frente/pdf/' + id
})
pdf2.addEventListener('click' , function(){
  form.action = '/reverso/pdf/' + id
})
let criador_id
let padre
let madre
let id_madre
let id_padre

//INFO DEL EJEMPLAR
fetch(urlUnEjemplar + id)
.then(function(r){
    return r.json();
})
.then(function(data){
   
    if(data.data.sexo == "H"){ 
      data.data.sexo = "Hembra"
    } else {
      data.data.sexo = "Macho"
    }
    
    if(data.data.pelo == "ZC"){
      data.data.pelo = "Zaino Colorado"
      } else if(data.data.pelo == "A") {
        data.data.pelo = "Alazan"
      } else if(data.data.pelo == "AT") {
        data.data.pelo = "Alazan Tostado" 
      } else if(data.data.pelo == "O") {
        data.data.pelo = "Oscuro"
      } else if(data.data.pelo == "M") {    
        data.data.pelo = "Moro"
      } else if(data.data.pelo == "R") {
        data.data.pelo = "Rosillo" 
      } else if(data.data.pelo == "T") {
        data.data.pelo = "Tordillo"
      } else if(data.data.pelo == "Z") {   
        data.data.pelo = "Zaino" 
      } else if(data.data.pelo == "ZD") {    
        data.data.pelo = "Zaino Doradillo" 
      } else {    
        data.data.pelo = "Zaino Negro"  
      }

      if(data.data.mes_nac == 1){ 
        data.data.mes_nac = "Enero" 
      } else if(data.data.mes_nac == 2) {    
        data.data.mes_nac = "Febrero"
      } else if(data.data.mes_nac == 3) {    
        data.data.mes_nac = "Marzo" 
      } else if(data.data.mes_nac == 4) {    
        data.data.mes_nac = "Abril" 
      } else if(data.data.mes_nac == 5) {    
        data.data.mes_nac = "Mayo" 
      } else if(data.data.mes_nac == 6) {
        data.data.mes_nac = "Junio"
      } else if(data.data.mes_nac == 7) {    
        data.data.mes_nac = "Julio" 
      } else if(data.data.mes_nac == 8) {   
        data.data.mes_nac = "Agosto" 
      } else if(data.data.mes_nac == 9) {
        data.data.mes_nac = "Septiembre"
      } else if(data.data.mes_nac == 10) {    
        data.data.mes_nac = "Octubre" 
      } else if(data.data.mes_nac == 11) { 
        data.data.mes_nac = "Noviembre"
      } else {    
        data.data.mes_nac = "Diciembre"  
      }

    
    nombre = data.data.nombre;
    sexo = data.data.sexo;
    pelo = data.data.pelo;
    dia_nac = data.data.dia_nac;
    mes_nac = data.data.mes_nac;
    anio_nac = data.data.anio_nac;
    criador_id = data.data.criador_id;
    padre = data.data.padre
    madre = data.data.madre
    id_madre = data.data.madre_id
    id_padre = data.data.padre_id

    nombreDelEjemplar.innerHTML = nombre
    inputNombreDelEjemplar.value = nombre
    descriptDelEjemplar.innerHTML = sexo +', '+ pelo + ', nacido el '+dia_nac+ ' de ' + mes_nac + ' de ' + anio_nac
    inputDescriptDelEjemplar.value =  sexo +', '+ pelo + ', nacido el '+dia_nac+ ' de ' + mes_nac + ' de ' + anio_nac
    padreEjemplar.innerHTML = padre
    idMadre.value = id_madre
    idPadre.value = id_padre
    
    
})
.catch(function(err){
  console.log(err);
})


//SACO EL NOMBRE DEL CRIADOR:
.then(function(){
  fetch(urlUnCriador+criador_id)
  .then(function(r){
      return r.json();
  })
  .then(function(data){
    let elCriador = data.data.propietario
    criador.innerHTML =  elCriador
    inputCriador.value = elCriador
  })
  .catch(function(err){
   alert(err)
  })
})


})