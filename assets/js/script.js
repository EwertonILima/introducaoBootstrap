/*
Case Sensitive = reconhece letras maisculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()

*/ 

let name = window.document.getElementById("name")
let email = document.querySelector("#email")
let about = document.querySelector("#about")
let nameOK = false
let emailOK = false
let aboutOK = false
let map = document.querySelector("#map")

name.style.width = "100%"
email.style.width = "100%"

function validName() {
    let txtName = document.querySelector("#txtName")
    if(name.value.length < 3){
        txtName.innerHTML = "Invalid Name"
        txtName.style.color = "red"
    }
    else {
        txtName.innerHTML = "Valid name"
        txtName.style.color = "green"
        nameOK = true
    }
}

function validEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Invalid Email"
        txtEmail.style.color = "red"
    }
    else {
        txtEmail.innerHTML = "Valid Email"
        txtEmail.style.color = "green"
        emailOK = true
    }
}

function validAbout(){
    let txtAbout = document.querySelector("#txtAbout")

    if(about.value.length >= 100) {
        txtAbout.innerHTML = "100 characters over"
        txtAbout.style.color = "red"
        txtAbout.style.display = "block"
    }
    else {
        txtAbout.style.display = "none"
        aboutOK = true
    }
}

function sent() {
    if (nameOK == true && emailOK == true && aboutOK == true) {
        alert("Form sent!")
    }
    else{
        alert("Wrong information...")
    }
}


function mapZoom() {
    map.style.width = "800px"
    map.style.height = "600px"
}

function mapNormal(){
    map.style.width = "400px"
    map.style.height = "300px"
}

