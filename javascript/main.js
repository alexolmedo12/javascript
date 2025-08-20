// Variables y arrays
let productos = ["Remera", "Pantalón", "Zapatillas", "Campera"];
let precios = [2500, 4500, 8000, 6500];
let carrito = [];
let total = 0;

// Función para mostrar productos
function mostrarProductos() {
   let lista = "Productos disponibles:\\n";
   for(let i = 0; i < productos.length; i++) {
       lista += (i + 1) + ". " + productos[i] + " - $" + precios[i] + "\\n";
   }
   alert(lista);
}

// Función para agregar al carrito
function agregarProducto() {
   mostrarProductos();
   let opcion = prompt("Ingrese el número del producto (1-4):");
   
   if(opcion >= 1 && opcion <= 4) {
       let indice = opcion - 1;
       carrito.push(productos[indice]);
       total = total + precios[indice];
       alert("¡" + productos[indice] + " agregado al carrito!");
       console.log("Producto agregado: " + productos[indice] + " - $" + precios[indice]);
   } else {
       alert("Opción inválida");
   }
}

// Función para mostrar carrito
function mostrarCarrito() {
   if(carrito.length == 0) {
       alert("El carrito está vacío");
   } else {
       let resumen = "Tu carrito:\\n";
       for(let i = 0; i < carrito.length; i++) {
           resumen += "- " + carrito[i] + "\\n";
       }
       resumen += "\\nTotal: $" + total;
       alert(resumen);
       console.log("Carrito actual:", carrito);
       console.log("Total: $" + total);
   }
}

// Función principal
function iniciarSimulador() {
   let continuar = true;
   
   alert("¡Bienvenido a la tienda online!");
   
   while(continuar) {
       let opcion = prompt("¿Qué deseas hacer?\\n1. Ver productos\\n2. Agregar al carrito\\n3. Ver carrito\\n4. Salir");
       
       if(opcion == "1") {
           mostrarProductos();
       } else if(opcion == "2") {
           agregarProducto();
       } else if(opcion == "3") {
           mostrarCarrito();
       } else if(opcion == "4") {
           continuar = false;
           if(carrito.length > 0) {
               alert("Gracias por tu compra. Total: $" + total);
           } else {
               alert("¡Hasta la próxima!");
           }
       } else {
           alert("Opción inválida");
       }
   }
}

