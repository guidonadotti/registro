document.getElementById("regBtn").addEventListener("click",function(){
    let nombre=document.getElementById("nombre")
    let apellido=document.getElementById("apellido")
    let email=document.getElementById("email")
    let password1=document.getElementById("password1")
    let password2=document.getElementById("password2")
    let terminos=document.getElementById("terminos")
    let boton=document.getElementById("regBtn")

    if(nombre.value!=null && apellido.value!=null && email.value!=null && terminos.checked==true && 
        (password1.value===password2.value) && password1.value.length>=6){
        showAlertSuccess()
    }else{
        showAlertError()
    }
})

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

/* Andrés Martínez, Guido Nadotti, María Pía Camesella, Agustin Gonzatto, Florencia Fernandez, Lihuén Villarreal */