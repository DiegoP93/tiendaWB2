import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let botonregistro=document.getElementById("botonregistro")
let modalinformativo=new bootstrap.Modal(document.getElementById('modalinformativo'))

botonregistro.addEventListener("click",function(event){

    event.preventDefault()
    
    let email=document.getElementById("Correo").value
    let password=document.getElementById("password").value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;

    let textoinformativo=document.getElementById("informaciongeneral")
    let formulario=document.getElementById("formularioderegistro")
    formulario.reset()
    textoinformativo.textContent="Exitoso quedo registrado"
    modalinformativo.show()
    setTimeout(function(){
      modalinformativo.hide()
    },2000)
    })
     // ...
   .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    let textoinformativo=document.getElementById("informaciongeneral")
    textoinformativo.textContent="fallo"+errorMessage
    modalinformativo.show()
    setTimeout(function(){
      modalinformativo.hide()
    },2000)
    });

})