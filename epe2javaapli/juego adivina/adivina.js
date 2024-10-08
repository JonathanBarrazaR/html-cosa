let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

document.getElementById("enviar").addEventListener("click", function() {
    let respuesta = document.getElementById("respuesta").value;
    let numero = parseInt(respuesta);

    if (numero === numeroAleatorio) {
        document.getElementById("resultado").innerHTML = ganar();
        reiniciarJuego();
    } else if (numero < numeroAleatorio) {
        document.getElementById("resultado").innerHTML = "el numero es mayor que el actual";
    } else {
        document.getElementById("resultado").innerHTML = "el numero es menor que el actual";
    }
});

function reiniciarJuego() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    document.getElementById("respuesta").value = "";
    document.getElementById("resultado").innerHTML = "";
}

function ganar() {
    alert("¡Felicidades, has ganado!");
  }