window.addEventListener('load' , function(){
 
    let id = document.getElementById('id').value
    let hijos1madre = document.getElementById('hijos1madre')


    let urlUnEjemplar = 'http://localhost:3002/api_ejemplar/';
    let urlHijos = 'http://localhost:3002/api_hijos/';
    let urlResultadosHijo = 'http://localhost:3002/api_resultados_hijos/';
    let urlCarrerasPorHijo = 'http://localhost:3002/api_carrera/';

  let arrayHijos1 = [];
  let hijosMadres = [];
 
  let nuevoArray = [];


//TRAIGO INFO DEL EJEMPLAR PARA TENER INFO DE SU 1 MADRE
let resultadosArray = [];
   
fetch(urlUnEjemplar + id)
.then(function(r){
    return r.json();
})
.then(function(data){
    let infoEjemplar = data.data
    idMadre = infoEjemplar.madre_id
   // alert(idMadre + 'capa mundial')
})
.catch(function(err){
    alert(err + 'ejemplar')
})

//TRAIGO INFO DE HIJOS DE LA PRIMERA MADRE
.then(function(){
    let arrayHijos = [];
    fetch(urlHijos + idMadre)
    .then(function(r){
        return r.json();
    })
    /*
    .then(function(data){
        arrayHijos.push(data.data)
       
        return arrayHijos
    })
    */
   .then(function(data){
    
   
    for (i of data.data){
        let resultadosDeCarreras = [];   
        let idI = i.id
        let nombreI = i.nombre
        let padre = i.padre
        let llego1 = [];
        let llego2 = [];
        let llego3 = [];
        alert(JSON.stringify(i))
        fetch(urlResultadosHijo + i.id)
        .then(function(r){
            return r.json();
        })
        .then(function(data){
            alert(JSON.stringify(data.data))
            for(i of data.data){
               
                if(i.llego_numero == 1){
                    llego1.push(i.carrera_id)
                }
                else if(i.llego_numero == 2){
                    llego2.push(i.carrera_id)
                } else {
                    llego3.push(i.carrera_id)
                }

                
            }
            return [llego1, llego2, llego3]
        })
        .then(function(){
            
        
           let llego1Hipodromo = [];
           let llego1Grupo= [];
           let llego1Nombre=[];
           for(i of llego1){
               fetch(urlCarrerasPorHijo + i)
               .then(function(r){
                return r.json();
                })
               .then(function(data){
                //   alert(JSON.stringify(data.data))
                   llego1Hipodromo.push(data.data.hipodromo)
                  
                   if(data.data.grupo != ''){
                       llego1Grupo.push(data.data.grupo)
                       llego1Nombre.push(data.data.nombre)
                       
                   }
                   return [llego1Hipodromo,llego1Grupo,llego1Nombre]
               })
               .then(function(){
                const getInfo =  {
                    idEje: idI,
                    nombreEje: nombreI,
                    padreEje: padre,
                    nombreCarrera: llego1Nombre,
                    grupo: llego1Grupo,
                   // hipodrom: llego1Hipodromo,
                    nombreDeHipodromo: llego1Hipodromo.filter((item,index)=>{
                        return llego1Hipodromo.indexOf(item) === index;
                      })
                    }
                    
                   
                 return getInfo
               })
               .then(function(getInfo){
                   alert(JSON.stringify(getInfo))
               })

               
           }

        })
   
    }
   
   })
 
   .catch(function(err){
    alert(err + 'url hijos')
})

   
   

    
  
    .catch(function(err){
        alert(err + 'url hijos')
    })
    
    
      
    
})




})

/*            
            .then(function(data){
                let arrayLlego1 = [];
                let arrayLlego2 = [];
                let arrayLlego3 = [];
              
                for(i of data.data){
                    if(i.llego_numero == 1){
                        arrayLlego1.push(i.carrera_id)
                    } else if (i.llego_numero == 2){
                        arrayLlego2.push(i.carrera_id)
                    
                    } else {
                        arrayLlego3.push(i.carrera_id)
                    }
                }
                //CUANTAS VECES LLEGO 1
                 let cantVecesLlego1 = arrayLlego1.length
               // alert(cantVecesLlego1)

                let nombreDeCarrera = [];
                let grupo = [];
                let hipodromos = [];
                 if(cantVecesLlego1 != 0){
                  for(i of arrayLlego1){
                    fetch(urlCarrerasPorHijo + i)
                    .then(function(r){
                        return r.json();
                    })
                    .then(function(data){
                        let d = JSON.stringify(data.data)
                        let dat = data.data
                        hipodromos.push(dat.hipodromo)
                        
                        
                        //  alert(result)
                        if(dat.grupo != ''){
                            nombreDeCarrera.push(dat.nombre)
                            grupo.push(dat.grupo)
                        }

                       // let nombreDeste = hipodromos.filter
                       
                        let nombreDeHipodromo = hipodromos.filter((item,index)=>{
                            return hipodromos.indexOf(item) === index;
                          })
                          
                    
                      const getInfo =  {
                          idEje: idI,
                          nombreEje: nombreHijo,
                          padreEje: padreHijo,
                          cantGanadas: cantVecesLlego1,
                          carrera: nombreDeCarrera,
                          grupo: grupo,
                          hipo: nombreDeHipodromo,
                          }
                          
                         
                       return getInfo
                       
                    })
                
                    .then(function(getInfo){
                      
                            arrayHijos.push(getInfo)
                            alert(JSON.stringify(arrayHijos))
                            return arrayHijos
                          
                     //   for(let i=0; i<arrayHijos.length; i++){
                          //  if(arrayHijos[i].idEje != getInfo.idEje){
                            //    alert('hola')
                         // arrayHijos.push(getInfo)
                          //  }
                         //   return(arrayHijos)
                     //   }
                    // alert(JSON.stringify(arrayHijos))
                      //  return arrayHijos
                      
                    })
/*
                    .then(function(arrayHijos){
                      for(let i=0; i<arrayHijos.length; i++){
                          let object = arrayHijos[i]
                          let comparo = arrayHijos[i+1]
                          if(object.idEje != comparo.idEje){
                             // nuevoArray.push(object)
                             alert('distinto')
                            
                             
                              
                          }else {alert('not')}
                      }
                      alert(JSON.stringify(nuevoArray))
                      
                            const found = arrayHijos.find(element => element.idEje ==  idiii);

                            nuevoArray.push(found)
                            alert(JSON.stringify(nuevoArray))
                     
                    })
                    .then(function(nuevoArray){
                        alert(JSON.stringify(nuevoArray))
                   //  alert('ok')

                    })
*/

                   
                 
    /*                
                
                  } 
                 
                }
       
            })
            
            .then(function(arrayHijos){
                alert(JSON.stringify(arrayHijos))
                //return arrayHijos
            })
            
      */
 
