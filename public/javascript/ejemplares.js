window.addEventListener("load" , function(){

  let form = document.getElementById("form")
  let pdf2 = document.getElementById("pdf2")

  pdf2.addEventListener("click", function(e){
    e.preventDefault()
    form.action = "/pdf2/<%=ejemplarX.id%>"

  })
})