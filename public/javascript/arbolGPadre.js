window.addEventListener("load" , function(){
    let id = document.getElementById('id').value
    let idPadre = document.getElementById('idPadre').value
    let inputAbueloP = document.getElementById('inputAbueloP')
    let inputAbuelaP = document.getElementById('inputAbuelaP')
   
    
    let urlUnEjemplar = 'http://localhost:3002/api_ejemplar/';
    
    
    let idAbueloP
    let idAbuelaP
    let idMAbuelaP
    let idPAbuelaP
    let idMAbueloP
    let idPAbueloP
    
    
    



    //INFO PADRE + ID ABUELXS
    fetch(urlUnEjemplar + idPadre)
    .then(function(r){
        alert('okadoka')
        return r.json();
        
    })
    .then(function(data){
        let infoPadre = data.data
        nombrePadre = data.data.nombre
        idAbueloP = infoPadre.padre_id
        idAbuelaP = infoPadre.madre_id
        alert(nombrePadre)
    })
    .catch(function(err){
        alert(err + 'padre')
    })

    .then(function(){
    
        //INFO ABUELAPATERNA + ID BISABUELXS
        fetch(urlUnEjemplar + idAbuelaP)
        .then(function(r){
            alert('la abuela P')
            return r.json();
        })
    
        .then(function(data){
            let infoAbulaP = data.data
            idPAbuelaP = infoAbulaP.padre_id
            idMAbuelaP = infoAbulaP.madre_id
            alert(idMAbuelaP)
            
        })
        .catch(function(err){
            alert(err + 'abuelaP')
        })
          //INFO ABUELOPATERNO + ID BISABUELXS
          fetch(urlUnEjemplar + idAbueloP)
          .then(function(r){
              alert('el abuelo P')
              return r.json();
          })
      
          .then(function(data){
              let infoAbuloP = data.data
              //inputAbuelaM.value = infoAbulaM.nombre
              idPAbueloP = infoAbuloP.padre_id
              idMAbueloP = infoAbuloP.madre_id
              alert(idMAbueloP + 'mabueloP')
              
          })
          .catch(function(err){
              alert(err + 'abueloP')
          })
    
        .then(function(){
           if(idPadre != 0){
               alert('perfecto')
           }
        })
    
    })
    })