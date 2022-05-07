export function ampliarInformacion(event){

    let producto={}
    if(event.target.classList.contains("btn")){
        producto={
            foto:event.target.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h4").textContent,
            precio:event.target.parentElement.querySelector("h5").textContent,
            descripción:event.target.parentElement.querySelector("h6").textContent,
            
        }
        console.log(producto)

        let foto=document.getElementById("fotoinfo")
        foto.src=producto.foto
        let nombre=document.getElementById("nombreinfo")
        nombre.textContent=producto.nombre
        let precio=document.getElementById("precioinfo")
        precio.textContent=producto.precio
        let descripción=document.getElementById("descripcioninfo")
        descripción.textContent=producto.descripción 
        
    }

    return producto
}
