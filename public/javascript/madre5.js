window.addEventListener('load' , function(){
    let id = document.getElementById('id').value
    let hijos5madre = document.getElementById('hijos5madre')

    let urlUnEjemplar = 'http://localhost:3002/api_ejemplar/';
    let urlHijos =  'http://localhost:3002/info_hijos/'

    let idMadreM2
    let idAbuelaM3 
    let idMAbuelaM4
    let idMMAbuelaM5
    fetch(urlUnEjemplar + id)
    .then(function(r){
        return r.json();
         })
//SACO ID DE LA MADRE
        .then(function(data){   
            let d= data.data
            idMadreM2 = d.madre_id
//SACO EL ID DE LA ABUELA
            fetch(urlUnEjemplar + idMadreM2)
            .then(function(r){
                return r.json();
                 })
                .then(function(data){   
                    let d= data.data
                    idAbuelaM3 = d.madre_id
//SACO EL ID DE LA MAMA DE LA ABUELA
                    fetch(urlUnEjemplar + idAbuelaM3)
                    .then(function(r){
                        return r.json();
                         })
                        .then(function(data){   
                            let d= data.data
                            idMAbuelaM4 = d.madre_id
//SACO EL ID DE LA MAMA DE LA MAMA DE LA ABUELA
                            fetch(urlUnEjemplar + idMAbuelaM4)
                            .then(function(r){
                                return r.json();
                                 })
                                .then(function(data){   
                                    let d= data.data
                                    idMMAbuelaM5 = d.madre_id
            
        
///UNA VEZ QUE SACO EL ID DE LA ABUELA PUEDO SACAR INFO DE LOS HIJOS DE 3MADRE (HERMANOS DE LA ABUELA)
    
   fetch(urlHijos + idMMAbuelaM5)
   .then(function(r){
    return r.json();
     })
    .then(function(data){   
        alert(JSON.stringify(data.data))
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
     alert(JSON.stringify(puesto1) + nombreEjemplar)
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
            hijos5madre.appendChild(addEjemplarGanador123(nombreEjemplar, padre, sexo, cantPuesto1 , hipodromos1, grupo1, nombreCsEsp1, cantPuesto2, grupos2, nombreCsEsp2,  cantPuesto3, grupos3, nombreCsEsp3 ));
      
      } else if( cantPuesto1 != 0 && cantPuesto2 != 0 && cantPuesto3 == 0){
       
        hijos5madre.appendChild(addEjemplarGanador12(nombreEjemplar, padre, sexo, cantPuesto1 , hipodromos1, grupo1, nombreCsEsp1, cantPuesto2, grupos2, nombreCsEsp2 ));
      
        }else if( cantPuesto1 != 0 && cantPuesto2 == 0 && cantPuesto3 == 0){
            hijos5madre.appendChild(addEjemplarGanador1(nombreEjemplar, padre, sexo, cantPuesto1 , hipodromos1, grupo1, nombreCsEsp1));
      
          }else if( cantPuesto1 != 0 && cantPuesto2 == 0 && cantPuesto3 != 0){
            hijos5madre.appendChild(addEjemplarGanador13(nombreEjemplar, padre, sexo, cantPuesto1 , hipodromos1, grupo1, nombreCsEsp1,  cantPuesto3, grupos3, nombreCsEsp3 ));
      
        
        } else if( cantPuesto1 == 0 && cantPuesto2 != 0 && cantPuesto3 != 0){
            hijos5madre.appendChild(addEjemplarGanador23(nombreEjemplar, padre, sexo, cantPuesto2, grupos2, nombreCsEsp2,  cantPuesto3, grupos3, nombreCsEsp3 ));
      
        
        } else if( cantPuesto1 == 0 && cantPuesto2 != 0 && cantPuesto3 == 0){
            hijos5madre.appendChild(addEjemplarGanador2(nombreEjemplar, padre, sexo, cantPuesto2, grupos2, nombreCsEsp2 ));
      
      
        } else if( cantPuesto1 == 0 && cantPuesto2 == 0 && cantPuesto3 != 0){
            hijos5madre.appendChild(addEjemplarGanador3(nombreEjemplar, padre, sexo, cantPuesto3, grupos3, nombreCsEsp3 ));
      
        } else if( cantPuesto1 == 0 && cantPuesto2 == 0 && cantPuesto3 == 0){
            hijos5madre.appendChild(addEjemplarGanador0(nombreEjemplar, padre, sexo));
      
        }
    }  
       
        
    
})

})
})
})
})
})