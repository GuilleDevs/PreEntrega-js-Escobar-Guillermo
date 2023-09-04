// En esta variable se van almacenar las peliculas que el usuario escriba
let peliculas = [];

// Se declara la fucion con la cual se van a ir agregando las peliculas a la variable "peliculas"
function agregar_peliculas() {
    let pelicula = prompt("🎬 Carrito de compras de Pelis 🎬 Ingrese el nombre de la película:");
    // Si bien no vimos metodos de array quise agregar el push para agregar al final de la lista cada pelicula que el usuario iba escribiendo
    peliculas.push(pelicula);
    alert("Pelicula " + pelicula + " agregada correctamente");
}

// Llamamos a la funcion
agregar_peliculas();

// Con el bucle el programa se va a ir repitiendo hasta que el cliente seleccione la opcion salir
while (true) {
    // Cada opcion que el usuario seleccione se va almacenar en la variable "opcion"
     let opcion = prompt("Seleccione una opción\n1. Agregar pelicula\n2. Mostrar peliculas elegidas\n3. Salir");

    // Con la condicional if se mostrara al usuario opcion que haya seleccionado, dependiendo de que condicion se cumpla.
    if (opcion == 1) {
        agregar_peliculas();
    }
    if (opcion == 2) {
        // Aunque no hayamos visto aun metodos de array quise agregar el .join con un salto de linea para que muestre las peliculas (que hemos ingresado) una debajo de otra
        alert("Agregaste al carrito las siguientes peliculas: \n\n" + peliculas.join("\n"));
    }
    if (opcion == 3) {
        // Con esta opcion corta el bucle y muestra la frase de los simpsion. (Leer como el jefe de los mini-super)
        alert("Gracias, vuelvan pronto!");
        break;
    }
}
