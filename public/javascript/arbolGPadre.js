
//FAMILIA PATERNA
 

window.addEventListener("load" , function(){
    let id = document.getElementById('id').value
    let inputPadreEnArbol = document.getElementById('inputPadreEnArbol')
    let inputAbueloP = document.getElementById('inputAbueloP')
    let inputAbuelaP = document.getElementById('inputAbuelaP')
    let inputPAbuelaP = document.getElementById('inputPAbuelaP')
    let inputMAbuelaP = document.getElementById('inputMAbuelaP')
    let inputMAbueloP= document.getElementById('inputMAbueloP')
    let inputPAbueloP = document.getElementById('inputPAbueloP')
 
    
    let urlUnEjemplar = 'http://localhost:3002/api_ejemplar/';
    
    let idPadre
    let idAbueloP
    let idAbuelaP
    let idMAbuelaP
    let idPAbuelaP
    let idMAbueloP
    let idPAbueloP
    let nombreAbuelaP
    let nombreAbueloP
    let nombreMAbuelaP 
    let nombrePAbuelaP
    let nombreMAbueloP
    let nombrePAbueloP 

    //INFO EJEMPLAR
    fetch(urlUnEjemplar + id)
.then(function(r){
    return r.json();
})
.then(function(data){
    let infoEjemplar = data.data
    idPadre = infoEjemplar.padre_id
})
.catch(function(err){
    alert(err + 'ejemplar')
})
.then(function(){


    //INFO PADRE + ID ABUELXS
    fetch(urlUnEjemplar + idPadre)
    .then(function(r){
    //    alert('okadoka')
        return r.json();
        
    })
    .then(function(data){
        let infoPadre = data.data
        nombrePadre = data.data.nombre
        idAbueloP = infoPadre.padre_id
        idAbuelaP = infoPadre.madre_id
        inputPadreEnArbol.value = nombrePadre
    })
    .catch(function(err){
        alert(err + 'padre')
    })

    .then(function(){
        if(idAbuelaP != 0){
        //INFO ABUELAPATERNA + ID BISABUELXS
        fetch(urlUnEjemplar + idAbuelaP)
        .then(function(r){
       //     alert('la abuela P')
            return r.json();
        })
    
        .then(function(data){
            let infoAbulaP = data.data
            nombreAbuelaP = data.data.nombre
            idPAbuelaP = infoAbulaP.padre_id
            idMAbuelaP = infoAbulaP.madre_id
            inputAbuelaP.value = nombreAbuelaP
       //     alert(idMAbuelaP)
            
        })
        .catch(function(err){
            alert(err + 'abuelaP')
        })
        
        .then(function(){
            if(idMAbuelaP != 0){
        //INFO MAMA ABUELA PATERNA
            fetch(urlUnEjemplar + idMAbuelaP)
            .then(function(r){
            //    alert('la M  abuela P tiene su id' + idMAbuelaP )
                return r.json();
            })
        
            .then(function(data){
                let infoMAbulaP = data.data
                nombreMAbuelaP = data.data.nombre
                inputMAbuelaP.value = nombreMAbuelaP
                
            })
            .catch(function(err){
                alert(err + 'MabuelaP')
            })
            }  //cierro condicional del fecth de MAbuelaP
        
        })
        .then(function(){
            //INFO PAPA ABUELA PATERNA
            if(idPAbuelaP != 0){
                fetch(urlUnEjemplar + idPAbuelaP)
                .then(function(r){
                  //  alert ('esgte es es id' + idPAbuelaP)
                    return r.json();
                })
            
                .then(function(data){
                 
                    nombrePAbuelaP = data.data.nombre
                    inputPAbuelaP.value = nombrePAbuelaP
                   // alert(nombrePAbuelaP)
                    
                })
                .catch(function(err){
                    alert(err + 'PabuelaP')
                })
            }
        })

        } //cierro condicional del fecth de AbuelaP
    //INFO ABUELOPATERNO + ID BISABUELXS
          if(idAbueloP != 0){
          fetch(urlUnEjemplar + idAbueloP)
          .then(function(r){
             // alert('el abuelo P')
              return r.json();
          })
      
          .then(function(data){
              let infoAbuloP = data.data
              nombreAbueloP = data.data.nombre
              idPAbueloP = infoAbuloP.padre_id
              idMAbueloP = infoAbuloP.madre_id
              inputAbueloP.value = nombreAbueloP
            //  alert('este es el id del MABUELOP' + idMAbueloP)
            
              
          })
          .catch(function(err){
              alert(err + 'abueloP')
          })
          //INFO MAMA ABUELO PATERNO
          
          .then(function(){
            if(idMAbueloP != 0){
                fetch(urlUnEjemplar + idMAbueloP)
                .then(function(r){
                     return r.json();
                 })
             
                 .then(function(data){
                    nombreMAbueloP = data.data.nombre
                    inputMAbueloP.value = nombreMAbueloP
                 })
                 .catch(function(err){
                     alert(err + 'abueloP')
                 })

            }
            //INFO PAPA ABUELO PATERNO
            if(idPAbueloP != 0){
                fetch(urlUnEjemplar + idPAbueloP)
                .then(function(r){
                     return r.json();
                 })
             
                 .then(function(data){
                    nombrePAbueloP = data.data.nombre
                    inputPAbueloP.value = nombrePAbueloP
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