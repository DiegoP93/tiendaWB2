import { pintarTienda } from "./llenadoTienda.js";
pintarTienda()
import{ampliarInformacion} from "./ampliarinfo.js";

import{pintarCarrito} from "./pintarCarrito.js"
pintarCarrito()

//objeto vacio
let producto={}

let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){

    let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
    producto=ampliarInformacion(event)
    if(event.target.classList.contains("btn")){
        modalinfoproducto.show()
    }
    
})
//accion de añadir al carrito

//carrito (arreglo de productos/arreglo de objetos)

let carrito=[]

let boton=document.getElementById("addalcarrito")
boton.addEventListener("click",function(event){

    //capturar cantidad del producto/solo se aplica para sacar informacion de los formularios
    let cantidad=document.getElementById("cantidadproducto").value;   


    //agregar la cantidad al objeto producto

    producto.cantidad=cantidad;

    let prodExiste = carrito.find((p) => p.nombre === producto.nombre);
    if (prodExiste) {    
    prodExiste.cantidad = Number(prodExiste.cantidad) + Number(producto.cantidad);

    prodExiste.subtotal = Number(producto.precio.replace("$", "")) * Number(prodExiste.cantidad);
    } else {
    
    
    producto.subtotal= Number(producto.precio.replace("$","")) *  Number(producto.cantidad);


    //agregar el producto al carrito 

    carrito.push(producto);

    }

    //calcula la sumatoria de cantidad

    let suma=0
    let sumaPrecio = 0

    carrito.forEach(function(producto){

        suma=suma+Number(producto.cantidad)
        sumaPrecio = sumaPrecio + Number(producto.subtotal);

        
        let totalNeto = document.getElementById("totalNeto");
        totalNeto.innerHTML = sumaPrecio; 
        pintarCarrito(suma);
        modalinfoproducto.hide();

    })
    
   

   /*let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
    modalinfoproducto.hide()*/
   
})

let limpiarcarro= document.getElementById("limpiar")
limpiarcarro.addEventListener("click",function(event){
    let contenedor = document.getElementById("contenedorventa");
    carrito=[]
    
    let capsula = document.getElementById("capsula");
    capsula.textContent = 0;
    capsula.classList.add("invisible");
    //borrar contenido html de una sección
    contenedor.innerHTML = "";
    totalNeto.innerHTML = "";   
});


//ver resumen de venta
let botoncarrito = document.getElementById("botoncarrito");
botoncarrito.addEventListener("click", function (event) {
  //tarea volver esto una función
  let contenedor = document.getElementById("contenedorventa");
  contenedor.innerHTML = "";
  /**************** MODAL CARRITO *****************/
  let modalVenta = new bootstrap.Modal(document.getElementById('resumencarrito')
 
  
  );
  
  if (carrito.length == 0) {
    
  }
   
    carrito.forEach(function(producto){

        //traversing
        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("cold-12","col-md-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12","col-md-8")

        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100")
        foto.src=producto.foto

        let nombre=document.createElement("p")
        nombre.innerHTML = producto.nombre;
        nombre.classList.add("text-center");
    
        //creo precio
        let precio = document.createElement("h3");
        precio.innerHTML = producto.precio;
        precio.classList.add("tarjeta__precio", "mt-2", "mb-4");
    
        //subtotal
        let subtotal = document.createElement("p");
        subtotal.innerHTML = "Subtotal: $"+producto.subtotal;
        subtotal.classList.add("tarjeta__subtotal");
        //dectectar si el carrito esta vacio
         //Creo la cantidad 
        let cantidad =document.createElement("p");
        cantidad.innerHTML="Cantidad: "+producto.cantidad;
        cantidad.classList.add("tarjeta__cantidad");

        //padres e hijos  
        columna1.appendChild(foto)
        columna2.appendChild(nombre);
        columna2.appendChild(precio);    
        columna2.appendChild(cantidad);
        columna2.appendChild(subtotal);
        fila.appendChild(columna1)
        fila.appendChild(columna2)

        contenedor.appendChild(fila)
        
    });

        modalVenta.show()
 
});