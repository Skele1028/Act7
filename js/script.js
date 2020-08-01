function validateEmail() {
     var email = document.getElementById("email").value;
     var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
     
     
     if(email == ""){
        alert("Ingrese una dirección de correo electrónico")
     } else if(expresion.test(email)){
         alert("La dirección " + email + " se ha suscrito correctamente")
     } else {
        alert("La dirección " + email + " es incorrecta")
     } 
}


$('#myList a').on('click', function (e) {
   e.preventDefault()
   $(this).tab('show')
 })

