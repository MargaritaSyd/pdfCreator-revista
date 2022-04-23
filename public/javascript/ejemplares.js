
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
  let inputDescriptDelEjemplar = document.getElementById('inputDescriptDelEjemplar')
  //capturo campos a completas con la info del resultado del ejemplar + inputs correspondientes
  let idTotalLargadas = document.getElementById('totalLargadas');
  let inputTotalLargadas = document.getElementById('inputTotalLargadas');
  let idTotalGanadas = document.getElementById('totalGanadas');
  let inputTotalGanadas = document.getElementById('inputTotalGanadas');
  let idTotalSegundos = document.getElementById('totalSegundos');
  let inputTotalSegundos = document.getElementById('inputTotalSegundos');
  let idTotalTerceros = document.getElementById('totalTerceros')
  let inputTotalTerceros = document.getElementById('inputTotalTerceros');
  let idTotalGanancias = document.getElementById('totalGanancias');
  let inputTotalGanancias = document.getElementById('inputTotalGanancias');
  ///capturo campos a completas con la info de carreras + inputs correspondientes
  let aniosCorrio = document.getElementById('aniosCorrio');
  let inputAniosCorrio = document.getElementById('inputAniosCorrio');
  let edadCorrio = document.getElementById('edadCorrio');
  let inputEdadCorrio = document.getElementById('inputEdadCorrio')
//alert(id)
let urlUnEjemplar = 'http://localhost:3002/api_ejemplar/'+ id;
let urlResultados = 'http://localhost:3002/api_resultados';
let urlUnEjemplarResultados = 'http://localhost:3002/api_resultado/'+ id;
let urlCarreras =  'http://localhost:3002/api_carreras';

let urlUnaCarrera = 'http://localhost:3002/api_carrera/'

pdf1.addEventListener('click' , function(){
  form.action = '/ok_form'
})

fetch(urlUnEjemplar)
.then(function(r){
    return r.json();
})
.then(function(data){
  
    //Recupero del ejemplar buscado su info con api_ejemplar/:id 

    
   
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
    mes_nac = data.data.mes_nac;
    pelo = data.data.pelo;
    dia_nac = data.data.dia_nac;
   
    anio_nac = data.data.anio_nac;

    nombreDelEjemplar.innerHTML = nombre
    inputNombreDelEjemplar.value = nombre
    descriptDelEjemplar.innerHTML = sexo +', '+ pelo + ', nacido el '+dia_nac+ ' de ' + mes_nac + ' de ' + anio_nac
    inputDescriptDelEjemplar.value =  sexo +', '+ pelo + ', nacido el '+dia_nac+ ' de ' + mes_nac + ' de ' + anio_nac
    alert(mes_nac)
})

/*
let anioCarreras = []
      
for(let i=0; i<arrayCarreras.length; i++){

  db.carreras.findByPk(arrayCarreras[i])
  .then(carrera => {
      anioCarreras.push(carrera.fecha.slice(0,-6))
      
})
.catch (err  =>{
  
  console.log(err)
  })
}

let anios = anioCarreras.sort(function(a,b){return a-b})
*/
let importeArray = [];
let arrayGanadas = [];
let arraySegundos = [];
let arrayTerceros = [];
let arrayCarreras = [];
let totalGanancias; 
let totalSegundos;
let totalPrimeros;
let totalTerceros;
let anioCarreras = [];
let primerAnio;
let ultimoAnio;

fetch(urlUnEjemplarResultados)
.then(function(r){
  alert('ok')
    return r.json();
})
.then(function(data){
  //let datadata = JSON.stringify(data.data)
  let datadata = data.data
  let totalLargadas = datadata.length
  let ultimaCarrera = datadata[datadata.length-1]
  let cuidador_id = datadata.cuidador
  let caballeriza_id = datadata.caballeriza
  for(let i=0; i<datadata.length; i++){
    importeArray.push(datadata[i].importe);  
    arrayCarreras.push(datadata[i].carrera_id);
    if(datadata[i].llego_numero == 1){
      arrayGanadas.push(datadata[i].llego_numero)
  }
  if(datadata[i].llego_numero == 2){
      arraySegundos.push(datadata[i].llego_numero)
  }
  if(datadata[i].llego_numero == 3){
      arrayTerceros.push(datadata[i].llego_numero)
  } 
  }
  totalGanancias = importeArray.reduce((a,b)=> a+b);
  totalSegundos = arraySegundos.length
  totalPrimeros = arrayGanadas.length
  totalTerceros = arrayTerceros.length
  alert(totalTerceros)

  idTotalLargadas.innerHTML = totalLargadas
  inputTotalLargadas.value = totalLargadas
  idTotalGanadas.innerHTML = totalPrimeros
  inputTotalGanadas.value = totalPrimeros
  idTotalSegundos.innerHTML = totalSegundos 
  inputTotalSegundos.value = totalSegundos
  idTotalTerceros.innerHTML = totalTerceros
  inputTotalTerceros.value = totalTerceros
  idTotalGanancias.innerHTML = '$'+ totalGanancias
  inputTotalGanancias.value = totalGanancias
  //alert(arrayCarreras)
})
.catch(function(err){
  console.log(err);
})
.then(function(){
  fetch(urlCarreras)
  .then(function(r){
   
      return r.json();
  })
  .then(function(data){
    //let datadata = JSON.stringify(data.data)
    let datadata = data.data
    let datas = JSON.stringify(datadata)
    datadata.forEach(e => {
      for(let j=0; j<arrayCarreras.length; j++){
          if(arrayCarreras[j] == e.id){
            anioCarreras.push(e.fecha.slice(0,-6))
          }
        }
      
    })
    //Años que el ejemplar tomo, uso el primero y el utlimo.
    let anios = anioCarreras.sort(function(a,b){return a-b})
    primerAnio = anioCarreras[0].slice(2);
    ultimoAnio = anioCarreras[anioCarreras.length-1].slice(2);
    edad0 = anioCarreras[0] - anio_nac;
    edadUltima = anioCarreras[anioCarreras.length-1] - anio_nac
    aniosCorrio.innerHTML = primerAnio + '-' + ultimoAnio    
    inputAniosCorrio.value = primerAnio + '-' + ultimoAnio    
    edadCorrio.innerHTML = edad0 + '-' + edadUltima
    inputEdadCorrio.value = edad0 + '-' + edadUltima
    
    alert(edadUltima)
  })
  .catch(function(err){
    console.log(err);
  })
})


/*
.then(function(){
  let anioCarrerasss
  for(let i=0; i<arrayCarreras.length; i++){
  let idCarrera = arrayCarreras[i]
    fetch(urlUnaCarrera + idCarrera)
   
    .then(function(r){
     
        return r.json();
    })
    .then(function(data){
      let carrera = data.data
      anioCarrerasss = 5
     // anioCarreras.push(carrera.fecha.slice(0,-6))
   
    
    })
    .catch(function(err){
      console.log(err);
    })
    }
 //   return anioCarrerasss
})
    
.then(function(){
  alert(anioCarrerasss)
})
*/



//El nombre de cuidador y caballeriza sale de tabla profesionales, saco id de api de resultados

})