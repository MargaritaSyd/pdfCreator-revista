window.addEventListener('load' , function(){
    let id = document.getElementById('id').value
    let cuidador = document.getElementById('cuidador');
    let inputCuidador = document.getElementById('inputCuidador');
    let caballeriza = document.getElementById('caballeriza');
    let inputCaballeriza = document.getElementById('inputCaballeriza');
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

    let urlInfoCarrera = 'http://localhost:3002/info_carreras/';
    let urlUnEjemplar = 'http://localhost:3002/api_ejemplar/';
    let urlUnProfesional = '/api_profesional/'
    let urlUltimaCarrera = '/ultima_carrera/' + id

    let anioNac 

    fetch(urlUnEjemplar + id)
    .then(function(r){
        return r.json();
     })
     .then(function(data){  
         anioNac = data.data.anio_nac
         
    

    fetch(urlInfoCarrera + id)
    .then(function(r){
       return r.json();
    })
   
    .then(function(data){  
     
        let datadata = data.data
        let totalLargo = datadata.length  //CANTIDAD DE CARRERAS QUE CORRIO
        idTotalLargadas.innerHTML = totalLargo
        inputTotalLargadas.value = totalLargo
        let importeTotal = []
        let primeros = []; //CANTIDAD CARRERAS SALIO 1
        let segundos = [];  //CANTIDAD CARRERAS SALIO 2
        let terceros = []  //CANTIDAD CARRERAS SALIO 3
        let fechaCarreras = [];


        for( i of datadata){
            let fecha = i.fecha
            let llegada = i.llego_numero
            importeTotal.push(i.importe)
            fechaCarreras.push({fecha: fecha.slice(0,-6), cuidador: i.cuidador, caballeriza: i.caballeriza })
           

            if(llegada == 1){
                primeros.push(i)
             //   alert(JSON.stringify(i))
            } else if (llegada == 2){
                segundos.push(i)
            } else if (llegada == 3){
                terceros.push(i)
            }
        }
       
        idTotalGanadas.innerHTML = primeros.length
        inputTotalGanadas.value = primeros.length // SALIO 1 TANTAS CARRERAS
        idTotalSegundos.innerHTML = segundos.length;
        inputTotalSegundos.value = segundos.length;// SALIO 2 TANTAS CARRERAS
        idTotalTerceros.innerHTML = terceros.length;
        inputTotalTerceros.value = terceros.length;// SALIO 3 TANTAS CARRERAS
        
        const initialValue = 0;
        const importe = importeTotal.reduce(
        (previousValue, currentValue) => previousValue + currentValue, initialValue);  //IMPORTE TOTAL RECAUDADO

        idTotalGanancias.innerHTML = importe;
        inputTotalGanancias.value = importe;


        let anios = fechaCarreras.sort(function(a,b){return a.fecha-b.fecha})
       
        let primerAnio = anios[0].fecha
        let primerEdad = primerAnio - anioNac //EDAD CORRIO PRIMERA CARRERA
        let ultimaCarrera = anios[anios.length-1]
        let ultimoAnio = anios[anios.length-1].fecha
        let ultimaEdad = ultimoAnio - anioNac //EDAD CORRIO ULTIMA CARRERA
        let primerAnioSlice = primerAnio.slice(2)   //DOS DIGITOS PRIMER A??O QUE CORRIO
        let ultimoAniolice = ultimoAnio.slice(2)  //DOS DIGITOS ULTIMO A??O QUE CORRIO
       
       
        aniosCorrio.innerHTML = primerAnioSlice + '-' + ultimoAniolice
        inputAniosCorrio.value = primerAnioSlice + '-' + ultimoAniolice
        edadCorrio.innerHTML = primerEdad + '-' + ultimaEdad
        inputEdadCorrio.value =  primerEdad + '-' + ultimaEdad
    
      
    
    
       




        
           })
    })
    fetch(urlUltimaCarrera)
    .then(function(r){
        return r.json();
     })
     .then(function(data){
         let d = data.data
        let cuidador_id
        let caballeriza_id
        for(let i of d){
            cuidador_id = i.cuidador
            caballeriza_id = i.caballeriza
        }
        fetch(urlUnProfesional + cuidador_id)
    .then(function(r){
        return r.json();
     })
     .then(function(data){
         let datas = data.data
         cuidador.innerHTML = datas.descripcion
         inputCuidador.value = datas.descripcion
     })
     fetch(urlUnProfesional + caballeriza_id)
     .then(function(r){
         return r.json();
      })
      .then(function(data){
          let datas = data.data
          caballeriza.innerHTML = datas.descripcion
          inputCaballeriza.value = datas.descripcion
      })

      
     })


})
