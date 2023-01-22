
//API DEL CLIMA
let api_clima = document.querySelector(".api_clima")

fetch("https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&lang=es&units=metric&appid=54a376f9b25d8c73557f6f230564b8ed")
    .then(response => response.json())
    .then(data => {

        let fecha = luxon.DateTime;
        let fecha_hoy = fecha.now();

        console.log(fecha_hoy)
        let icon_clima = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`

        let div_api_clima = document.createElement("div");
        div_api_clima.className = "api_clima_js";
        div_api_clima.innerHTML = `<h4>${data.name}</h4>
                                    <h4>${Math.round(data.main.temp)}°C</h4>
                                    <img src=${icon_clima}>
                                    <h4>${data.weather[0].description}</h4>
                                    <h4>${fecha_hoy.day}/${fecha_hoy.month}/${fecha_hoy.year}</h4>
                                    <h4>${fecha_hoy.hour}:${fecha_hoy.minute}</h4>`
        api_clima.append(div_api_clima);
    })




let formulario = JSON.parse(localStorage.getItem("formulario")) || [];
let btn_formulario = document.getElementById("enviar_formulario");
let formulario_enviado = document.querySelector(".contacto__form--form");

class Formulario {
    constructor(nombre, apellido, email, telefono, mensaje) {

        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.telefono = telefono
        this.mensaje = mensaje

    }
}

function form_enviado(formulario) {

    let formulario_localstorage = JSON.stringify(formulario);
    localStorage.setItem("formulario", formulario_localstorage);

    formulario_enviado.innerHTML = "";

    let div_formulario = document.createElement("div");
    div_formulario.className = "formulario_enviado";
    div_formulario.innerHTML = `<h2>Muchas gracias por enviarnos sus datos</h2>
                                <h2>En brebe nos estaremos comunicando</h2>`
    formulario_enviado.append(div_formulario);
    
}


btn_formulario.addEventListener("click", function (e) {

    e.preventDefault();

    let formulario_nombre = document.getElementById("form_nombre").value;
    let formulario_apellido = document.getElementById("form_apellido").value;
    let formulario_email = document.getElementById("form_email").value;
    let formulario_telefono = document.getElementById("form_telefono").value;
    let formulario_mensaje = document.getElementById("form__textarea").value;

    let nuevo_formulario = new Formulario(formulario_nombre,
        formulario_apellido,
        formulario_email,
        formulario_telefono,
        formulario_mensaje);

    formulario.push(nuevo_formulario);

    console.log(formulario);

    form_enviado(formulario)

})




