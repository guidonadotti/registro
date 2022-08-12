document.getElementById("regBtn").addEventListener("click",function(){
    let nombre=document.getElementById("nombre")
    let apellido=document.getElementById("apellido")
    let email=document.getElementById("email")
    let password1=document.getElementById("password1")
    let password2=document.getElementById("password2")
    let terminos=document.getElementById("terminos")
    let boton=document.getElementById("regBtn")
    for(elemento of document.getElementsByClassName("form-control")){
        elemento.setAttribute("required","")
    }
    if(nombre.value!=null){
        showAlertSuccess()
    }
})

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}