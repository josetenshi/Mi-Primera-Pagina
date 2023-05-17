function showAlert(){
    alert('Hola, esta es una alerta desde JavaScript!');
}
function Pluss(){
    var Number1=parseInt(document.getElementById('num1').value)
    var Number2=parseInt(document.getElementById('num2').value)
    var Number3=parseInt(document.getElementById('num3').value)
    var Number4=parseInt(document.getElementById('num4').value)
    var Result;
    Result=Number1-Number2-Number3-Number4;
    alert("El resultado es"+Result);
}

const form = document.getElementById('myForm')

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }

  function validateForm() {
    const input = document.getElementById('email')
    const inputValue = input.value
     
    if (!validateEmail(inputValue)) {
      alert('Por favor ingrese un correo electrónico válido.')
    } else {
      alert('Correo electrónico enviado correctamente.')
    }
  }
if (form){
form.addEventListener('submit', function (event) {
  event.preventDefault()
  validateForm()
})
 }
 
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")
                    }
                      );