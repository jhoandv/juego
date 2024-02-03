//aqui se selcciona un numero al azar lo redondea abajo y el suma uno para etrmianr en 100 si sale 99
let aleatorio = Math.floor(Math.random() * 100) + 1
let numeroEntrada = document.getElementById("numeroEntrada")
let intentos = document.getElementById("intentos")
let intento=0

function mostrarBoton() {
    document.getElementById("boton").style.display = 'block';
}
function recargarPagina() {

    location.reload()
}

function resultado() {
   intento ++
   intentos.textContent=intento

    let numeroIngresado = parseInt(numeroEntrada.value)
    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = "ingrese un dato valido entre 1 y 100"
        return

    }
    else if (numeroIngresado < aleatorio) {
        mensaje.textContent = "el numero aleatorio es mayor"
        return
    }
    else if (numeroIngresado > aleatorio) {
        mensaje.textContent = "el numero aleatorio es menor"
        return
    }
    else (numeroIngresado === aleatorio)
    {
        mensaje.textContent = "el numero es correcto"
        mensaje.style.color = 'red'
        numeroEntrada.disabled = true;
        mostrarBoton();


        return
    }

}










