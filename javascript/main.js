// Productos demo
let productos = [
{id:1, nombre:"Remera", precio:2500},
{id:2, nombre:"Pantalón", precio:4500}
];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


const $productos = document.getElementById("productos");
const $carrito = document.getElementById("carrito");
const $total = document.getElementById("total");
const $mensaje = document.getElementById("mensaje");


function renderProductos(){
$productos.innerHTML = "";
productos.forEach(p => {
let div = document.createElement("div");
div.className = "card";
div.innerHTML = `<strong>${p.nombre}</strong><br>$${p.precio}<br><button>Agregar</button>`;
div.querySelector("button").onclick = ()=> agregarAlCarrito(p);
$productos.appendChild(div);
});
}


function renderCarrito(){
$carrito.innerHTML = "";
carrito.forEach((c,i)=>{
let div = document.createElement("div");
div.className = "card";
div.innerHTML = `${c.nombre} - $${c.precio} <button>Quitar</button>`;
div.querySelector("button").onclick = ()=> { carrito.splice(i,1); actualizar(); };
$carrito.appendChild(div);
});
$total.textContent = "Total: $"+carrito.reduce((acc,el)=>acc+el.precio,0);
}


function agregarAlCarrito(p){
carrito.push(p);
actualizar("Agregado: "+p.nombre);
}


function actualizar(msj=""){
localStorage.setItem("carrito", JSON.stringify(carrito));
renderCarrito();
if(msj){ $mensaje.textContent = msj; setTimeout(()=> $mensaje.textContent="",2000); }
}


// Eventos
document.getElementById("form-producto").onsubmit = e => {
e.preventDefault();
const nombre = document.getElementById("nombre").value;
const precio = Number(document.getElementById("precio").value);
productos.push({id:Date.now(), nombre, precio});
renderProductos();
e.target.reset();
};


document.getElementById("vaciar").onclick = ()=> { carrito=[]; actualizar("Carrito vacío"); };
document.getElementById("finalizar").onclick = ()=> { carrito=[]; actualizar("Compra finalizada"); };


// Inicialización
renderProductos();
renderCarrito();