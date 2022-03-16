// const productos = ['Motherboard ATX Intel', 'Memoria RAM 4 GB DDR3', 'Hard Disk 80 GB SEAGATE', 'Monitor Viewsonic .31', 'Case Babytower', 'Fuente 100~240 ATX 5 AMP']
const productos = ['Ford Focus XTE 2.0 modelo 2020', 'Fiat Uno 1.5 modelo 2019', 'Renault Duster 2.0 LE modelo 2021', 'BMW 325i modelo 2021', 'Jeep Anana', 'Durazno', 'Ciruelas', 'Arandanos', 'Papaya', 'Mango']
const carrito = []

const titulo = document.getElementById("titulo")
const slogan = document.getElementById("slogan")

const ul = document.getElementById("listadoFrutas") //Dentro de este nodo, cargaré los <li> con los productos
const listadoCarrito = document.getElementById("listadoCarrito") //En este otro, los productos a comprar