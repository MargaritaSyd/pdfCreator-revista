
 //FAMILIA MATERNA

window.addEventListener("load" , function(){
    let id = document.getElementById('id').value
    let inputMadreEnArbol = document.getElementById('inputMadreEnArbol')
    let inputAbueloM = document.getElementById('inputAbueloM')
    let inputAbuelaM = document.getElementById('inputAbuelaM')
    let inputPAbuelaM = document.getElementById('inputPAbuelaM')
    let inputMAbuelaM = document.getElementById('inputMAbuelaM')
    let inputMAbueloM= document.getElementById('inputMAbueloM')
    let inputPAbueloM = document.getElementById('inputPAbueloM')
 
    
    let urlUnEjemplar = 'http://localhost:3002/api_ejemplar/';
    
    let idMadre
    let idAbueloM
    let idAbuelaM
    let idMAbuelaM
    let idPAbuelaM
    let idMAbueloM
    let idPAbueloM
    let nombreAbuelaM
    let nombreAbueloM
    let nombreMAbuelaM 
    let nombrePAbuelaM
    let nombreMAbueloM
    let nombrePAbueloM 

//INFO EJEMPLAR
fetch(urlUnEjemplar + id)
.then(function(r){
    return r.json();
})
.then(function(data){
    let infoEjemplar = data.data
    idMadre = infoEjemplar.madre_id
})
.catch(function(err){
    alert(err + 'ejemplar')
})
.then(function(){


    //INFO MADRE + ID ABUELXS
    fetch(urlUnEjemplar + idMadre)
    .then(function(r){
       // alert('okadoka')
        return r.json();
        
    })
    .then(function(data){
        let infoMadre = data.data
        nombreMadre = data.data.nombre
        idAbueloM = infoMadre.padre_id
        idAbuelaM = infoMadre.madre_id
        inputMadreEnArbol.value = nombreMadre
    })
    .catch(function(err){
        alert(err + 'Madre')
    })

    .then(function(){
        if(idAbuelaM != 0){
//INFO ABUELAMATERNA + ID BISABUELXS
        fetch(urlUnEjemplar + idAbuelaM)
        .then(function(r){
            alert('la abuela M')
            return r.json();
        })
    
        .then(function(data){
            let infoAbulaM = data.data
            nombreAbuelaM = data.data.nombre
            idPAbuelaM = infoAbulaM.padre_id
            idMAbuelaM = infoAbulaM.madre_id
            inputAbuelaM.value = nombreAbuelaM
          //  alert(idMAbuelaM)
            
        })
        .catch(function(err){
            alert(err + 'abuelaM')
        })
        
        .then(function(){
            if(idMAbuelaM != 0){
        //INFO MAMA ABUELA MATERNA
            fetch(urlUnEjemplar + idMAbuelaM)
            .then(function(r){
                return r.json();
            })
        
            .then(function(data){
                nombreMAbuelaM = data.data.nombre
                inputMAbuelaM.value = nombreMAbuelaM
                
            })
            .catch(function(err){
                alert(err + 'MabuelaM')
            })
            }  //cierro condicional del fecth de MAbuelaM
        
        })
        .then(function(){
//INFO PAPA ABUELA MATERNA
            if(idPAbuelaM != 0){
                fetch(urlUnEjemplar + idPAbuelaM)
                .then(function(r){
                    return r.json();
                })
            
                .then(function(data){
                 
                    nombrePAbuelaM = data.data.nombre
                    inputPAbuelaM.value = nombrePAbuelaM
                   // alert(nombrePAbuelaP)
                    
                })
                .catch(function(err){
                    alert(err + 'PabuelaM')
                })
            }
        })

        } //cierro condicional del fecth de AbuelaM
    //INFO ABUELOMATERNO + ID BISABUELXS
          if(idAbueloM != 0){
          fetch(urlUnEjemplar + idAbueloM)
          .then(function(r){
              return r.json();
          })
      
          .then(function(data){
              let infoAbuloM = data.data
              nombreAbueloM = data.data.nombre
              idPAbueloM = infoAbuloM.padre_id
              idMAbueloM = infoAbuloM.madre_id
              inputAbueloM.value = nombreAbueloM
            
              
          })
          .catch(function(err){
              alert(err + 'abueloM')
          })
          //INFO MAMA ABUELO MATERNO
          
          .then(function(){
            if(idMAbueloM != 0){
                fetch(urlUnEjemplar + idMAbueloM)
                .then(function(r){
                     return r.json();
                 })
             
                 .then(function(data){
                    nombreMAbueloM = data.data.nombre
                    inputMAbueloM.value = nombreMAbueloM
                 })
                 .catch(function(err){
                     alert(err + 'abueloM')
                 })

            }
            //INFO PAPA ABUELO MATERNO
            if(idPAbueloM != 0){
                fetch(urlUnEjemplar + idPAbueloM)
                .then(function(r){
                     return r.json();
                 })
             
                 .then(function(data){
                    nombrePAbueloM = data.data.nombre
                    inputPAbueloM.value = nombrePAbueloM
                 })
                 .catch(function(err){
                     alert(err + 'abueloP')
                 })

            }
           
          })
          
        
        }
   
    })
})
})