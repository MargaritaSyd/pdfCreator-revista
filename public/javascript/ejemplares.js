
window.addEventListener("load" , function(){
  let button = document.getElementById('boton')
alert('ok')
let url = 'http://localhost:3002/api_ejemplares';


alert('ok')
async function getUser() {
  try {
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
button.addEventListener('click' , function(){
  getUser()
  })
})