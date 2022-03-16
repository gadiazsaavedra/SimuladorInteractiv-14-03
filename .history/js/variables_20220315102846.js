// const productos = ['Motherboard ATX Intel', 'Memoria RAM 4 GB DDR3', 'Hard Disk 80 GB SEAGATE', 'Monitor Viewsonic .31', 'Case Babytower', 'Fuente 100~240 ATX 5 AMP']
const productos = ['Ford Focus ', 'Manzana', 'Pera', 'Frutillas', 'Anana', 'Durazno', 'Ciruelas', 'Arandanos', 'Papaya', 'Mango']
const carrito = []

const titulo = document.getElementById("titulo")
const slogan = document.getElementById("slogan")

const ul = document.getElementById("listadoFrutas") //Dentro de este nodo, cargaré los <li> con los productos
const listadoCarrito = document.getElementById("listadoCarrito") //En este otro, los productos a comprar