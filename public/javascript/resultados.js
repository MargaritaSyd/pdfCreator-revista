window.addEventListener('load' , function(){
    let id = document.getElementById('id').value
    let urlInfoCarrera = 'http://localhost:3002/info_carreras/';
    let urlUnEjemplar = 'http://localhost:3002/api_ejemplar/';

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
        let totalLargadas = datadata.length  //CANTIDAD DE CARRERAS QUE CORRIO
        let importeTotal = []
        let primeros = []; //CANTIDAD CARRERAS SALIO 1
        let segundos = [];  //CANTIDAD CARRERAS SALIO 2
        let terceros = []  //CANTIDAD CARRERAS SALIO 3
        let fechaCarreras = [];


        for( i of datadata){
            let fecha = i.fecha
            let llegada = i.llego_numero
            importeTotal.push(i.importe)
            fechaCarreras.push(fecha.slice(0,-6))

            if(llegada == 1){
                primeros.push(i)
            } else if (llegada == 2){
                segundos.push(i)
            } else if (llegada == 3){
                terceros.push(i)
            }
        }
       
        let anios = fechaCarreras.sort(function(a,b){return a-b})
        let primerAnio = anios[0]
        let primerEdad = primerAnio - anioNac //EDAD CORRIO PRIMERA CARRERA
        let ultimoAnio = anios[anios.length-1]
        let ultimaEdad = ultimoAnio - anioNac //EDAD CORRIO ULTIMA CARRERA
        let primerAnioSlice = primerAnio.slice(2)   //DOS DIGITOS PRIMER AÑO QUE CORRIO
        let ultimoAniolice = ultimoAnio.slice(2)  //DOS DIGITOS ULTIMO AÑO QUE CORRIO
    
        let cantPrimeros = primeros.length //CANTIDAD DE VECES QUE LLEGO PRIMERO
        let cantSegundos = segundos.length //CANT DE VECES QUE LLEGO SEGUNDO
        let cantTercero = terceros.length //CANTIDAD DE VECES QUE LLEGO TERCERO

        
        alert(ultimaEdad)
        alert(ultimoAniolice)
        const initialValue = 0;
        const sumWithInitial = importeTotal.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
        ); 
    //   alert(sumWithInitial)  //IMPORTE TOTAL RECAUDADO




//alert(sumWithInitial);
        
    })
})
})