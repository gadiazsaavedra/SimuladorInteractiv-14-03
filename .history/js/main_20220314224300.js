titulo.innerText = "2 AVENIDAS AUTOMOTORES"
slogan.innerText = "Los Mejores Usados de"
// titulo.innerText = "HARDWAREVINTAGE.COM"
// slogan.innerText = "Tu Ecommerce favorito de repuestos informáticos out-of-stock"

const cargarProductos = ()=> { //Usen el DEBUGGER para seguir el código paso a paso
    for (fruta of productos) {
        const liProductos = document.createElement("li")
                liProductos.className = "collection-item"
                liProductos.innerText = fruta
                liProductos.setAttribute("onclick", `agregarAlCarrito('${fruta}')`)
                ul.append(liProductos)
            }
}

// SI QUEREMOS CREAR LOS ELEMENTOS HTML DE FORMA DINAMICA
const agregarAlCarrito = (prod)=> { //Usen el DEBUGGER para seguir el código paso a paso
    if (prod > "") {
        const id = prod + "enCarrito" //ID dinámico, para operar desde JS
        const liCarrito = document.createElement("li")
              liCarrito.className = "collection-item italica-carrito"
              liCarrito.innerText = prod
              liCarrito.id = id //ID dinámico
              liCarrito.setAttribute("ondblclick", `eliminarDelCarrito('${id}')`)
              listadoCarrito.append(liCarrito)
    }
}

//Para crear la opción de eliminar del carrito, debemos generar un ID dinámico
//al momento de crear un <li> por cada producto agregado al Carrito.
const eliminarDelCarrito = (productoID)=> { //Usen el DEBUGGER para seguir el código paso a paso
    if (confirm("¿Desea eliminar el producto del carrito?")) {
        const itemAeliminar = document.getElementById(productoID)
              itemAeliminar.remove()
              return
    }
}

//CARGAR LISTADO DE PRODUCTOS AL INGRESAR A LA PÁGINA
cargarProductos()