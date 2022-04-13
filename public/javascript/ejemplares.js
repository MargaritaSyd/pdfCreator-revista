window.addEventListener("load" , function(){

  let form = document.getElementById("form")
  let pdf1 = document.getElementById("pdf1")

  let pdf2 = document.getElementById("pdf2")
  let id = document.getElementById('id').value

  pdf1.addEventListener("click", function(e){
    form.action = "/frente/pdf/"+ id
  })
  pdf2.addEventListener("click", function(e){
    form.action = "/reverso/pdf/"+ id
  })
})