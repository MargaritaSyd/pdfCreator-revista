window.addEventListener('load' , function(){
    let id = document.getElementById('id').value
    let hijos6madre = document.getElementById('hijos6madre')
    let primeraMadre = document.getElementById('primeraMadre');
    let segundaMadre = document.getElementById('segundaMadre')
    let terceraMadre = document.getElementById('terceraMadre')
    let cuartaMadre = document.getElementById('cuartaMadre')
    let quintaMadre = document.getElementById('quintaMadre')

    let urlUnEjemplar = 'http://localhost:3002/api_ejemplar/';
    let urlHijos =  'http://localhost:3002/info_hijos/'

    let idMadreM2
    let idAbuelaM3 
    let idMAbuelaM4
    let idMMAbuelaM5
    let idMMAbuelaM6
  

    fetch(urlUnEjemplar + id)
    .then(function(r){
        return r.json();
         })
//SACO ID DE LA MADRE
        .then(function(data){   
            let d= data.data
            idMadreM2 = d.madre_id
              //INFO M1
              let nombreMadreM1 = d.nombre
              let nombrePadreMadreM1 = d.padre
              let nacMadre = d.anio_nac
              primeraMadre.innerHTML = '<b style="border-bottom: 1px solid black ;">1a. madre:</b></p>' + nombreMadreM1 + '(' + nacMadre + ')' + '(' + nombrePadreMadreM1 + ')'
              
//SACO EL ID DE LA ABUELA
            fetch(urlUnEjemplar + idMadreM2)
            .then(function(r){
                return r.json();
                 })
                .then(function(data){   
                    let d= data.data
                    idAbuelaM3 = d.madre_id
                    //INFO M2
                    let nombreMadreM2 = d.nombre
                    let nombrePadreMadreM2 = d.padre
                    let nacMadreM2 = d.anio_nac
                    segundaMadre.innerHTML = '<b style="border-bottom: 1px solid black ;">2a. madre:</b></p>' + nombreMadreM2 + '(' + nacMadreM2 + ')' + '(' + nombrePadreMadreM2 + ')'
                    
                    
//SACO EL ID DE LA MAMA DE LA ABUELA
                    fetch(urlUnEjemplar + idAbuelaM3)
                    .then(function(r){
                        return r.json();
                         })
                        .then(function(data){   
                            let d= data.data
                            idMAbuelaM4 = d.madre_id
                            //INFO M3
                           let nombreMadreM3 = d.nombre
                           let nombrePadreMadreM3 = d.padre
                           let nacMadreM3 = d.anio_nac
                            terceraMadre.innerHTML = '<b style="border-bottom: 1px solid black ;">3a. madre:</b></p>' + nombreMadreM3 + '(' + nacMadreM3 + ')' + '(' + nombrePadreMadreM3 + ')'
                    

//SACO EL ID DE LA MAMA DE LA MAMA DE LA ABUELA
                            fetch(urlUnEjemplar + idMAbuelaM4)
                            .then(function(r){
                                return r.json();
                                 })
                                .then(function(data){   
                                    let d= data.data
                                    idMMAbuelaM5 = d.madre_id
                                     //INFO M4
                                     let nombreMadreM4 = d.nombre
                                     let nombrePadreMadreM4 = d.padre
                                     let nacMadreM4 = d.anio_nac
                                    cuartaMadre.innerHTML = '<b style="border-bottom: 1px solid black ;">4a. madre:</b></p>' + nombreMadreM4 + '(' + nacMadreM4 + ')' + '(' + nombrePadreMadreM4 + ')'
                    
            
 //SACO EL ID DE LA M de M DE LA MAMA DE LA ABUELA
                            fetch(urlUnEjemplar + idMMAbuelaM5)
                            .then(function(r){
                                return r.json();
                                 })
                            .then(function(data){   
                                let d= data.data
                                idMMAbuelaM6 = d.madre_id
                                //INFO M5
                                  let nombreMadreM5 = d.nombre
                                  let nombrePadreMadreM5 = d.padre
                                  let nacMadreM5 = d.anio_nac
                                 quintaMadre.innerHTML = '<b style="border-bottom: 1px solid black ;">5a. madre:</b></p>' + nombreMadreM5 + '(' + nacMadreM5 + ')' + '(' + nombrePadreMadreM5 + ')'
                 
            
        
///UNA VEZ QUE SACO EL ID DE LA ABUELA PUEDO SACAR INFO DE LOS HIJOS DE 3MADRE (HERMANOS DE LA ABUELA)
    
   fetch(urlHijos + idMMAbuelaM6)
   .then(function(r){
    return r.json();
     })
    .then(function(data){   
   //     alert(JSON.stringify(data.data))
       let d = data.data
      //  let result = d.groupBy( ({ id }) => id );
      
     
 
      //FUNCION EJEMPLAR GANADOR DE 1 2 3 PUESTOS
      
      function addEjemplarGanador123(nombre , padre , sexo , cant1 , puesto1 , grupo1, nombreCsEspeciales1, cant2 ,puesto2, nombreCsEspeciales2, cant3 ,puesto3, nombreCsEspeciales3 ){
        let p = document.createElement('p');
        p.className = "nombreEjemplarHijo123"
        p.textContent = nombre + '(' + sexo + ' ' + padre + ').' + ' Gdr de '+ cant1 + ' cs en '+ puesto1 + '. ' + grupo1 + ' '+ nombreCsEspeciales1 +'. Segundo puesto en ' + cant2 + ' cs especiales ' + puesto2 + ' ' + nombreCsEspeciales2+'. Tercer puesto en ' + cant3 + ' cs especiales ' + puesto3 + ' ' + nombreCsEspeciales3+'.' ;
     
 
         return p;
      }

      //FUNCTION EJEMPLAR GANADOR 1 Y 2 PUESTO

       
      function addEjemplarGanador12(nombre , padre , sexo , cant1 , puesto1 , grupo1, nombreCsEspeciales1, cant2 ,puesto2, nombreCsEspeciales2 ){
        let p = document.createElement('p');
        p.className = "nombreEjemplarHijo12"
        p.textContent = nombre + '(' + sexo + ' ' + padre + ').' + ' Gdr de '+ cant1 + ' cs en '+ puesto1 + '. ' + grupo1 + ' '+ nombreCsEspeciales1 +'. Segundo puesto en ' + cant2 + ' cs especiales ' + puesto2 + ' ' + nombreCsEspeciales2+'.' ;
     
 
         return p;
      }

      //FUNCION GANADOR DE PRIMER PUESTO
      function addEjemplarGanador1(nombre , padre , sexo , cant1 , puesto1 , grupo1, nombreCsEspeciales1){
        let p = document.createElement('p');
        p.className = "nombreEjemplarHijo12"
        p.textContent = nombre + '(' + sexo + ' ' + padre + ').' + ' Gdr de '+ cant1 + ' cs en '+ puesto1 + '. ' + grupo1 + ' '+ nombreCsEspeciales1 +'.' ;
     
 
         return p;
      }
      
      //FUNCION GANADOR 1 Y 3
       
      function addEjemplarGanador13(nombre , padre , sexo , cant1 , puesto1 , grupo1, nombreCsEspeciales1, cant3 ,puesto3, nombreCsEspeciales3 ){
        let p = document.createElement('p');
        p.className = "nombreEjemplarHijo123"
        p.textContent = nombre + '(' + sexo + ' ' + padre + ').' + ' Gdr de '+ cant1 + ' cs en '+ puesto1 + '. ' + grupo1 + ' '+ nombreCsEspeciales1 +'. Tercer puesto en ' + cant3 + ' cs especiales ' + puesto3 + ' ' + nombreCsEspeciales3+'.' ;
     
 
         return p;
      }

      //FUNCION GANADOR 2 Y 3
      function addEjemplarGanador23(nombre , padre , sexo , cant2 ,puesto2, nombreCsEspeciales2, cant3 ,puesto3, nombreCsEspeciales3 ){
        let p = document.createElement('p');
        p.className = "nombreEjemplarHijo123"
        p.textContent = nombre + '(' + sexo + ' ' + padre + ').' + ' Segundo puesto en ' + cant2 + ' cs especiales ' + puesto2 + ' ' + nombreCsEspeciales2+'. Tercer puesto en ' + cant3 + ' cs especiales ' + puesto3 + ' ' + nombreCsEspeciales3+'.' ;
     
 
         return p;
      }
      // FUNCTION GANADOR 2 PUESTO
   
 
      function addEjemplarGanador2(nombre , padre , sexo , cant2 ,puesto2, nombreCsEspeciales2, cant3 ,puesto3, nombreCsEspeciales3 ){
        let p = document.createElement('p');
        p.className = "nombreEjemplarHijo123"
        p.textContent = nombre + '(' + sexo + ' ' + padre + ').' +' Segundo puesto en ' + cant2 + ' cs especiales ' + puesto2 + ' ' + nombreCsEspeciales2+'.' ;
     
 
         return p;
      }
      // FUNCTION GANADOR 3 PUESTO
   
 
      function addEjemplarGanador3(nombre , padre , sexo, cant3 ,puesto3, nombreCsEspeciales3 ){
        let p = document.createElement('p');
        p.className = "nombreEjemplarHijo123"
        p.textContent = nombre + '(' + sexo + ' ' + padre + ').'+' Tercer puesto en ' + cant3 + ' cs especiales ' + puesto3 + ' ' + nombreCsEspeciales3+'.' ;
     
 
         return p;
      }
       // FUNCTION GANADOR 0 PUESTO
   
 
       function addEjemplarGanador0(nombre , padre , sexo ){
        let p = document.createElement('p');
        p.className = "nombreEjemplarHijo123"
        p.textContent = nombre + '(' + sexo + ' ' + padre + ').';
     
 
         return p;
      }

         for(i of d){
    
     let carrerasDelEjemplar = i.carreras
    
     let nombreEjemplar = i.nombreEjemplar
     let sexo = i.sexo;
     let padre = i.padre;
    
     let puesto1 = [];
     let puesto1G = [];
     let puesto2G = [];
     let puesto3G = [];
     let nombreCsEsp1 = [];
     let nombreCsEsp2 = [];
     let nombreCsEsp3 = [];
     
     for(i of carrerasDelEjemplar){
       
        if(i.llego_numero == 1){     
            puesto1.push(i.hipodromo)
         
        }
        if(i.llego_numero == 1 && i.grupo != ''){
            puesto1G.push(i.grupo)
            nombreCsEsp1.push(i.nombreCarrera)

        }
        if(i.llego_numero == 2 && i.grupo != ''){     
            puesto2G.push(i.grupo)
            nombreCsEsp2.push(i.nombreCarrera)
        }
        if(i.llego_numero == 3 && i.grupo != ''){     
            puesto3G.push(i.grupo)
            nombreCsEsp3.push(i.nombreCarrera)
        }
     

     }
    // alert(JSON.stringify(puesto1) + nombreEjemplar)
     let cantPuesto1 = puesto1.length
     let cantPuesto2 = puesto2G.length
     let cantPuesto3 = puesto3G.length
     //FILTRO HIPODROMOS EN EL QUE SALE PRIMIERO
     let hipodromos1 = puesto1.filter((item,index)=>{
        return puesto1.indexOf(item) === index;})

    //FILTRO GRUPOS EN EL QUE SALIO 2, 1 y 3
    let grupos2 = puesto2G.filter((item,index)=>{
        return puesto2G.indexOf(item) === index;})
    let grupo1 = puesto1G.filter((item,index)=>{
        return puesto1G.indexOf(item) === index;})
    let grupos3 = puesto3G.filter((item,index)=>{
        return puesto3G.indexOf(item) === index;})
    
        
        if(cantPuesto1 != 0 && cantPuesto2 != 0 && cantPuesto3 != 0 ){
            hijos6madre.appendChild(addEjemplarGanador123(nombreEjemplar, padre, sexo, cantPuesto1 , hipodromos1, grupo1, nombreCsEsp1, cantPuesto2, grupos2, nombreCsEsp2,  cantPuesto3, grupos3, nombreCsEsp3 ));
      
      } else if( cantPuesto1 != 0 && cantPuesto2 != 0 && cantPuesto3 == 0){
       
        hijos6madre.appendChild(addEjemplarGanador12(nombreEjemplar, padre, sexo, cantPuesto1 , hipodromos1, grupo1, nombreCsEsp1, cantPuesto2, grupos2, nombreCsEsp2 ));
      
        }else if( cantPuesto1 != 0 && cantPuesto2 == 0 && cantPuesto3 == 0){
            hijos6madre.appendChild(addEjemplarGanador1(nombreEjemplar, padre, sexo, cantPuesto1 , hipodromos1, grupo1, nombreCsEsp1));
      
          }else if( cantPuesto1 != 0 && cantPuesto2 == 0 && cantPuesto3 != 0){
            hijos6madre.appendChild(addEjemplarGanador13(nombreEjemplar, padre, sexo, cantPuesto1 , hipodromos1, grupo1, nombreCsEsp1,  cantPuesto3, grupos3, nombreCsEsp3 ));
      
        
        } else if( cantPuesto1 == 0 && cantPuesto2 != 0 && cantPuesto3 != 0){
            hijos6madre.appendChild(addEjemplarGanador23(nombreEjemplar, padre, sexo, cantPuesto2, grupos2, nombreCsEsp2,  cantPuesto3, grupos3, nombreCsEsp3 ));
      
        
        } else if( cantPuesto1 == 0 && cantPuesto2 != 0 && cantPuesto3 == 0){
            hijos6madre.appendChild(addEjemplarGanador2(nombreEjemplar, padre, sexo, cantPuesto2, grupos2, nombreCsEsp2 ));
      
      
        } else if( cantPuesto1 == 0 && cantPuesto2 == 0 && cantPuesto3 != 0){
            hijos6madre.appendChild(addEjemplarGanador3(nombreEjemplar, padre, sexo, cantPuesto3, grupos3, nombreCsEsp3 ));
      
        } else if( cantPuesto1 == 0 && cantPuesto2 == 0 && cantPuesto3 == 0){
            hijos6madre.appendChild(addEjemplarGanador0(nombreEjemplar, padre, sexo));
      
        }
    }  
       
        
    
})

})
})
})
})
})
})