const nombre= document.getElementById("name");
const correo= document.getElementById("correo");
const telefono =document.getElementById("Telefono");
const form= document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", ev=>{
    ev.preventDefault()
    let warnings="";
    let entrar = false;
    let regexEmail= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    parrafo.innerHTML="";
    if(nombre.value.length < 6){
        warnings += 'El nombre no es valido <br>'  
        entrar = true      
    }
    console.log(regexEmail.test(correo.value))
    if(!regexEmail.test(correo.value)){
        warnings += 'El correo no es valido <br>'
        entrar= true
    }

    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML= "Enviado";
    }
})