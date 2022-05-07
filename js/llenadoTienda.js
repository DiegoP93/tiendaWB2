export function pintarTienda(){
    
    let productos=[
        {nombre:"Kratos",precio:450000,foto:"img/figuraKratos.jpg",descripción:"Figura coleccionable de god of war"},
        {nombre:"Camiseta",precio:70000,foto:"img/CamisetaKratos.jpg",descripción:"Camiseta coleccionable de god of war"},
        {nombre:"Silla Gamer",precio:1000000,foto:"img/sillagamer.jpg",descripción:"silla gamer Razer"},
        {nombre:"Taza",precio:20000,foto:"img/tazakratos.jpg",descripción:"taza de god of war"},
        {nombre:"Videojuego(God of war 4)",precio:5000000,foto:"img/god of war 4.jpg",descripción:"videojuego god of war 4"},
        {nombre:"llavero",precio:5000,foto:"img/llavero.jpg",descripción:"llavero coleccionable de god of war"},
        {nombre:"Play 4",precio:2000900,foto:"img/play4EdicionGodofwar.jpg",descripción:"PlayStation 4 Pro Edicion - God of War"},
        {nombre:"Espadas God of war",precio:550000,foto:"img/espadas.jpg",descripción:"Espadas coleccionables de god of war"},
        {nombre:"Buso",precio:90000,foto:"img/buso.jpg",descripción:"Buso coleccionable de god of war"},
        {nombre:"Poster God of war",precio:75000,foto:"img/postergodofwar.jpg",descripción:"Poster coleccionable de god of war"},
    ]
    //creo una variable para almacenar la base
        let fila=document.getElementById("fila")
    
    //Recorriendo un arreglo con js
        productos.forEach(function(producto){
            console.log(producto)
            console.log(producto.nombre)
            console.log(producto.precio)
            console.log(producto.foto)
            console.log(producto.descripción)
    
        //pintar con js
        //1. se empieza a crear la estructura
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        let foto=document.createElement("img")
        foto.classList.add("card-img-top","foto")
        foto.src=producto.foto
    
        //creando titulo
    
        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre

        let precio= document.createElement("h5")
        precio.classList.add("text-center","invisible")
        precio.textContent=producto.precio

        let descripción=document.createElement("h6")
        descripción.classList.add("text-center","invisible")
        descripción.textContent=producto.descripción
    
        //Creando un boton
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-4","mb-4",)
        boton.textContent="ver producto"
    
        //2. ordenar la estructura 
        //padres e hijos
    
        tarjeta.appendChild(foto)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripción)
        tarjeta.appendChild(boton)
        
    
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        
    
     })
}