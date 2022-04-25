window.addEventListener('load' , function(){
 
    let id = document.getElementById('id').value
    let urlUnEjemplar = 'http://localhost:3002/api_ejemplar/';
    let urlHijos = 'http://localhost:3002/api_hijos/';
    let urlResultadosHijo = 'http://localhost:3002/api_resultados_hijos/';
    let urlCarrerasPorHijo = 'http://localhost:3002/api_carrera/';

  


//TRAIGO INFO DEL EJEMPLAR PARA TENER INFO DE SU 1 MADRE

fetch(urlUnEjemplar + id)
.then(function(r){
    return r.json();
})
.then(function(data){
    let infoEjemplar = data.data
    idMadre = infoEjemplar.madre_id
    alert(idMadre + 'capa mundial')
})
.catch(function(err){
    alert(err + 'ejemplar')
})

//TRAIGO INFO DE HIJOS DE LA PRIMERA MADRE
.then(function(){
    fetch(urlHijos + idMadre)
    .then(function(r){
        return r.json();
    })
    .then(function(data){
        let datadata = data.data
        for(i of datadata){
            alert('hola')
            
            let idI = i.id
            let nombreHijo = i.nombre
//BUSCO RESULTADOS DE LAS CARRERAS DE CADA HIJO
            fetch(urlResultadosHijo + idI)
            .then(function(r){
                return r.json();
            })
            
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
                
                for(i of arrayLlego1){
                    fetch(urlCarrerasPorHijo + i)
                    .then(function(r){
                        return r.json();
                    })
                    .then(function(data){
                        let d = JSON.stringify(data.data)
                        alert(d)
                    })
                    

                }
                
              
    
            })
            
            .catch(function(err){
                alert(err + 'resultados hijos')
            })
           
            

        }
    })
    .catch(function(err){
        alert(err + 'url hijos')
    })
    

})


})

