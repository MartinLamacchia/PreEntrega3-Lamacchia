//ARRAY DE PRODUCTOS
let productos = [
    //BUZOS
    { id: "buzo-01", categoria: "buzos", titulo: "Buzo Gris", img: "./img/buzo01.png", descripcion: "Buzo griz con capucha y tipo canguro", precio: 4500, cantidad: 1 },
    { id: "buzo-02", categoria: "buzos", titulo: "Buzo Gris", img: "./img/buzo02.jpg", descripcion: "Buzo FILA rojo-blanco-azul", precio: 4500, cantidad: 1 },

    //CAMPERAS
    { id: "campera-01", categoria: "camperas", titulo: "Campera 86", img: "./img/campera01.jpg", descripcion: "Campera celeste y azul con logo del mundial 86", precio: 7500, cantidad: 1 },
    { id: "campera-02", categoria: "camperas", titulo: "Campera AFA", img: "./img/campera02.jpg", descripcion: "Campera negra y celeste con capucha logo de la AFA", precio: 7500, cantidad: 1 },
    { id: "campera-03", categoria: "camperas", titulo: "Campera Adidas 01", img: "./img/campera03.jpg", descripcion: "Campera adidas Varilite Down con capucha", precio: 8500, cantidad: 1 },
    { id: "campera-04", categoria: "camperas", titulo: "Campera Under", img: "./img/campera04.jpg", descripcion: "Campera Under Armour azul y negra", precio: 6500, cantidad: 1 },
    { id: "campera-05", categoria: "camperas", titulo: "Campera Adidas 02", img: "./img/campera05.jpg", descripcion: "Campera Adidas negra", precio: 7500, cantidad: 1 },
    { id: "campera-06", categoria: "camperas", titulo: "Campera Lotto", img: "./img/campera06.jpg", descripcion: "Campera Lotto negra", precio: 6500, cantidad: 1 },
    { id: "campera-07", categoria: "camperas", titulo: "Campera Nike", img: "./img/campera07.jpg", descripcion: "Campera Nike abrigada azul", precio: 8500, cantidad: 1 },

    //PANTALONES
    { id: "pantalon-01", categoria: "pantalones", titulo: "Pantalon Fila", img: "./img/pantalones01.jpg", descripcion: "Pantalon chupin de mujer Fila azul", precio: 3500, cantidad: 1 },
    { id: "pantalon-02", categoria: "pantalones", titulo: "Pantalon Adidas", img: "./img/pantalones02.jpg", descripcion: "Pantalon chupin de mujer Adidas negro", precio: 4500, cantidad: 1 },
    { id: "pantalon-03", categoria: "pantalones", titulo: "Pantalon Under", img: "./img/pantalones03.jpg", descripcion: "Pantalon chupin de mujer Under Armour gris", precio: 3500, cantidad: 1 },
    { id: "pantalon-04", categoria: "pantalones", titulo: "Pantalon Reebook", img: "./img/pantalones04.jpg", descripcion: "Pantalon de mujer Reebook gris", precio: 2500, cantidad: 1 },
    { id: "pantalon-05", categoria: "pantalones", titulo: "Pantalon Nike", img: "./img/pantalones05.jpg", descripcion: "Pantalon de mujer Nike negro", precio: 4500, cantidad: 1 },

    //REMERAS
    { id: "remeras-01", categoria: "remeras", titulo: "Remera Trival 01", img: "./img/remera01.png", descripcion: "Remera trival colores celeste-blaco-fucsia-amarillo", precio: 2500, cantidad: 1 },
    { id: "remeras-02", categoria: "remeras", titulo: "Remera Trival 02", img: "./img/remera02.png", descripcion: "Remera trival colores celeste-blaco-fucsia-amarillo", precio: 2500, cantidad: 1 },
    { id: "remeras-03", categoria: "remeras", titulo: "Remera con manchas", img: "./img/remera03.png", descripcion: "Remera con pintas de colores", precio: 2500, cantidad: 1 },
    { id: "remeras-04", categoria: "remeras", titulo: "Remera Unisex", img: "./img/remera04.png", descripcion: "Remera celeste y blanca con logo del mundial 86", precio: 2500, cantidad: 1 },
    { id: "remeras-05", categoria: "remeras", titulo: "Remera Lotto", img: "./img/remera05.jpg", descripcion: "Remera Lotto gris y negra", precio: 3500, cantidad: 1 },
    { id: "remeras-06", categoria: "remeras", titulo: "Remera Puma", img: "./img/remera06.jpg", descripcion: "Campera Puma celeste", precio: 3500, cantidad: 1 },

    //ZAPATILLAS
    { id: "zapatillas-01", categoria: "zapatillas", titulo: "Zapatillas Nike 01", img: "./img/zapatillas01.jpg", descripcion: "Zapatillas Nike Air MAX", precio: 25000, cantidad: 1 },
    { id: "zapatillas-02", categoria: "zapatillas", titulo: "Zapatilla Nike 02", img: "./img/zapatillas02.jpg", descripcion: "Zapatillas Nike Air ZOOM naranja y celeste", precio: 25000, cantidad: 1 },
    { id: "zapatillas-03", categoria: "zapatillas", titulo: "Zapatilla Nike 03", img: "./img/zapatillas03.jpg", descripcion: "Zapatillas Nike negra y blanca", precio: 25000, cantidad: 1 },
    { id: "zapatillas-04", categoria: "zapatillas", titulo: "Zapatilla Nike 04", img: "./img/zapatillas04.jpg", descripcion: "Zapatillas Nike Air ZOOM celeste y azul", precio: 25000, cantidad: 1 },
    { id: "zapatillas-05", categoria: "zapatillas", titulo: "Zapatilla Adidas", img: "./img/zapatillas05.jpg", descripcion: "Zapatillas Adidas negra y blanca", precio: 35000, cantidad: 1 }
];


// API PARA EL CLIMA Y LIBRERIA LUXON PARA LA FECHA Y HORA
let api_clima = document.querySelector(".api_clima")

fetch("https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&lang=es&units=metric&appid=54a376f9b25d8c73557f6f230564b8ed")
    .then(response => response.json())
    .then(data => {

        let fecha = luxon.DateTime;
        let fecha_hoy = fecha.now();

        let icon_clima = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`

        let div_api_clima = document.createElement("div");
        div_api_clima.className = "api_clima_js";
        div_api_clima.innerHTML = `<h4>${data.name}</h4>
                                    <h4>${Math.round(data.main.temp)}°C</h4>
                                    <img src=${icon_clima}>
                                    <h4>${data.weather[0].description}</h4>
                                    <h4>${String(fecha_hoy.day).padStart(2, "0")}/${String(fecha_hoy.month).padStart(2, "0")}/${fecha_hoy.year}</h4>
                                    <h4>${String(fecha_hoy.hour).padStart(2, "0")}:${String(fecha_hoy.minute).padStart(2, "0")}</h4>`
        api_clima.append(div_api_clima);

    })


// GUARDAR PRODUCTOS EN EL LOCALSTORAGE
let productos_guardados_localstorage = JSON.stringify(productos);
localStorage.setItem("productos", productos_guardados_localstorage);


/* 
FUNCION CREADA PARA DAR LA BIENVENIA A LA PERSONA QUE INGRESE SU NOMBRE
EN LA VENTANA EMERGENTE DE LA PAGINA DE INICIO
*/
function enviar() {

    Swal.fire({

        icon: "success",
        title: `Hola ${suscribite_nombre.value}`,
        text: "Bienvenido/a a Tienda Connection",
        text: "Gracias por dejarnos tu mail, te van a estar llegando promociones",
        color: '#8a2be2',
        showConfirmButton: false,
        timer: 3000,
        showClass: {
            popup: 'animate__animated animate__rollIn'
        },
        hideClass: {
            popup: 'animate__animated animate__rollOut'
        }

    })

}

let suscribite_nombre = document.getElementById("suscribite_nombre");
let suscribite_email = document.getElementById("suscribite_email");
let suscribite_enviar = document.getElementById("suscribite_enviar");
let hero_boton = document.getElementById("hero_boton");

suscribite_enviar.addEventListener("click", enviar);


let contenedor_productos = document.getElementById("productos_container");

let productos_en_localstorage = localStorage.getItem("productos");
let array_productos = JSON.parse(productos_en_localstorage);

let contenedor_carrito = document.getElementById("productos_carrito");
let botones_menu_categoria = document.querySelectorAll(".menu_categoria");
let comprar_carrito = document.querySelector(".comprar_carrito");


let productos_en_carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// FUNCION PARA CARGAR PRODUTOS AL DOM INDEX.HTML
function cargar_los_productos() {

    contenedor_productos.innerHTML = "";

    array_productos.forEach(function (producto) {

        let div_productos = document.createElement("div");
        div_productos.className = "productos_container-producto";
        div_productos.innerHTML = `<img class="imagen_producto" src=${producto.img} alt=${producto.id}>
                                    <div class="contenido_producto">
                                    <h3 class="titulo_producto">${producto.titulo}</h3>
                                    <p class="descripcion_producto">${producto.descripcion}</p>
                                    <h4 class="precio_producto">$${producto.precio}</h4>
                                    </div>
                                    <button class="boton_producto" id=${producto.id}>Agregar</button>
                                    `
        contenedor_productos.append(div_productos);

        let btn_agregar = div_productos.querySelector(".boton_producto");

        btn_agregar.addEventListener("click", function (e) {

            let boton_agregar = e.target.id
            let producto_agregado = productos.find(function (producto) {
                return producto.id == boton_agregar
            })

            if (productos_en_carrito.some(function (producto) {
                return producto.id === boton_agregar
            })) {

                Toastify({

                    text: "Producto agregado",
                    duration: 1000,
                    style: {
                        color: "#02d43d",
                        background: "rgba(255, 255, 255)",
                        border: "none",
                        fontSize: "1.3rem",
                        fontFamily: "'Quicksand', sans-serif",
                        fontWeight: "bolder",

                    }

                }).showToast();


                let i = productos_en_carrito.findIndex(function (producto) {
                    return producto.id == boton_agregar
                })
                productos_en_carrito[i].cantidad++

            } else {

                Toastify({

                    text: "Producto agregado",
                    duration: 1000,
                    style: {
                        color: "#02d43d",
                        background: "rgba(255, 255, 255)",
                        border: "none",
                        fontSize: "1.3rem",
                        fontFamily: "'Quicksand', sans-serif",
                        fontWeight: "bolder",

                    }

                }).showToast();

                productos_en_carrito.push({
                    id: producto.id,
                    imagen: producto.img,
                    nombre: producto.titulo,
                    cantidad: producto.cantidad,
                    precio: producto.precio

                });
            }



            carrito_compras()

            let productosCarrito_guardados_localstorage = JSON.stringify(productos_en_carrito);
            localStorage.setItem("carrito", productosCarrito_guardados_localstorage);

        })

    });

}


// FUNCION PARA CARGAR LOS PRODUTOS ALCARRITO Y AUMENTA LA CANTIDAD
function carrito_compras() {

    contenedor_carrito.innerHTML = "";

    productos_en_carrito.forEach(function (producto) {

        let div_carrtio = document.createElement("div");
        div_carrtio.className = "productos_carrito-producto";
        div_carrtio.innerHTML = `<img src=${producto.imagen} class="imagen_producto-carrito" alt="Imagen del producto">
                                        <h2>${producto.nombre}</h2>
                                        <p>${producto.cantidad}</p>
                                        <h2 class="precio_producto">$${producto.cantidad * producto.precio}</h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-trash trash_carrito" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>`

        contenedor_carrito.append(div_carrtio)


        let eliminar = div_carrtio.querySelector(".trash_carrito");

        eliminar.addEventListener("click", function () {
            eliminar_productos_carrito(producto.id)
        })


    });

    comprar_carrito.innerHTML = "";

    function calcular_total(acu, producto) {

        acu = acu + producto.precio * producto.cantidad
        return acu
    }


    let costo_total = productos_en_carrito.reduce(calcular_total, 0);

    let total_carrito = document.createElement("div");
    total_carrito.className = "total_carrito";
    total_carrito.innerHTML = `<h3>Total</h3>
                                <h2 id="costo_total">$${costo_total}</h2>`;
    comprar_carrito.append(total_carrito);

    let btn_comprar = document.createElement("button");
    btn_comprar.innerText = "Comprar";
    comprar_carrito.append(btn_comprar);

    btn_comprar.addEventListener("click", function () {

        productos_en_carrito = [];
        
        let productosCarrito_guardados_localstorage = JSON.stringify(productos_en_carrito);
        localStorage.setItem("carrito", productosCarrito_guardados_localstorage);
        
        total_carrito.innerHTML = `<h3>Total</h3>
                                    <h2 id="costo_total">$0</h2>`;
        comprar_carrito.append(total_carrito);

        comprar_carrito.append(btn_comprar);

        contenedor_carrito.innerHTML = "";

        let div_carrito_vacio = document.createElement("div");
        div_carrito_vacio.className = "carrito_vacio";
        div_carrito_vacio.innerHTML = `<h3>Muchas gracias por su compra!!!</h3>`
        contenedor_carrito.append(div_carrito_vacio);

    })

}


// FUNCION PARA ELIMINA PRODUCTOS DEL CARRITO 
function eliminar_productos_carrito(id_producto) {

    let producto_eliminado = productos_en_carrito.find(function (producto) {
        return producto.id == id_producto
    });

    productos_en_carrito = productos_en_carrito.filter(function (elemento) {
        return elemento !== producto_eliminado
    })

    let productosCarrito_eliminado_localstorage = JSON.stringify(productos_en_carrito);
    localStorage.setItem("carrito", productosCarrito_eliminado_localstorage);

    Toastify({

        text: "Producto Eliminado",
        duration: 1000,
        style: {
            color: "#02d43d",
            background: "rgba(255, 255, 255)",
            border: "none",
            fontSize: "1.3rem",
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: "bolder",

        }

    }).showToast();

    carrito_compras();

}

cargar_los_productos();
carrito_compras();


//BOTONES DE FILTRO DE PRODUCTOS
botones_menu_categoria.forEach(function (boton) {

    boton.addEventListener("click", function (e) {

        botones_menu_categoria.forEach(function (boton) {

            boton.classList.remove("activo");

        })

        e.target.classList.add("activo");

        if (e.target.id != "todos") {

            array_productos = array_productos.filter(function (producto_elegido) {

                return producto_elegido.categoria == e.target.id

            });

            cargar_los_productos(array_productos)

            productos_en_localstorage = localStorage.getItem("productos");
            array_productos = JSON.parse(productos_en_localstorage)

        } else {

            cargar_los_productos(array_productos);

        }

    });

});
