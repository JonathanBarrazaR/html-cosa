const botones = document.querySelectorAll('button');
const elementoResultado = document.getElementById('resultado');

let seleccionJugador;
let seleccionComputadora;

botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        seleccionJugador = e.target.id;
        seleccionComputadora = obtenerSeleccionAleatoria();
        jugarRonda(seleccionJugador, seleccionComputadora);
    });
});

function obtenerSeleccionAleatoria() {
    const opciones = ['Piedra', 'Papel', 'Tijera'];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

function jugarRonda(seleccionJugador, seleccionComputadora) {
    let resultado;
    if (seleccionJugador === seleccionComputadora) {
        resultado = '¡Empate!';
    } else if (
        (seleccionJugador === 'Piedra' && seleccionComputadora === 'Tijera') ||
        (seleccionJugador === 'Papel' && seleccionComputadora === 'Piedra') ||
        (seleccionJugador === 'Tijera' && seleccionComputadora === 'Papel')
    ) {
        resultado = '¡Ganó el jugador!';
    } else {
        resultado = '¡Ganó la computadora!';
    }

    elementoResultado.textContent = `Elegiste ${seleccionJugador} y la computadora eligió ${seleccionComputadora}. ${resultado}`;
}