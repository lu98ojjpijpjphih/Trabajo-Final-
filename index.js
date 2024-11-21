let boton1 = document.querySelector("#boton1")

boton1.onclick = function() {
  location.href = "Pagina2.html"
}

let edadUsuario = prompt("Ingresa tu edad")

if (edadUsuario >= 14) {
    alert("Tienes acceso a esta página.")
} else {
    alert("No tienes la edad suficiente para acceder")
}

let boton2 = document.querySelector("#Boton2")
let valor2 = document.querySelector("#texto2")
let p2 = document.querySelector("#Parrafo2")

let arreglo = [] 

boton2.onclick = function () {

    arreglo.push (' ' + valor2.value)
    p2.textContent = arreglo
}