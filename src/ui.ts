import { tablero } from "./modelo";
import {
  sePuedeVoltearLaCarta,
  iniciaPartida,
  voltearLaCarta,
  esSegundaCarta,
  mostrarMensaje,
  limpiarMensaje,
  ocultarImagenCarta,
  mostrarImagenCarta,
} from "./motor";

export const mapearDivsCartas = () => {
  for (let indice = 0; indice < tablero.cartas.length; indice++) {
    const elementoDiv = document.querySelector(
      `div[data-indice-id="${indice}"]`
    );

    if (
      elementoDiv !== null &&
      elementoDiv !== undefined &&
      elementoDiv instanceof HTMLDivElement
    ) {
      elementoDiv.addEventListener("click", () => {
        limpiarMensaje();
        if (sePuedeVoltearLaCarta(tablero, indice)) {
          voltearLaCarta(tablero, indice);
          mostrarImagenCarta(indice);
          manejarSegundaCarta();
        } else {
          mostrarMensaje("No se puede voltear esa carta");
        }
      });
    }
  }
};

const manejarSegundaCarta = () => {
  if (tablero.estadoPartida === "DosCartasLevantadas") {
    setTimeout(() => {
      esSegundaCarta(tablero);
      actualizarContadorTurnos();
      actualizarTablero();
    }, 1000);
  }
};

const actualizarContadorTurnos = () => {
  const elementoContador = document.getElementById("contador-turnos");

  if (
    elementoContador !== null &&
    elementoContador !== undefined &&
    elementoContador instanceof HTMLDivElement
  ) {
    elementoContador.textContent = `Turnos: ${tablero.intentos}`;
  }
};

const actualizarTablero = () => {
  for (let indice = 0; indice < tablero.cartas.length; indice++) {
    if (
      !tablero.cartas[indice].estaVuelta &&
      !tablero.cartas[indice].encontrada
    ) {
      ocultarImagenCarta(indice);
    }
  }
};

export const clickBotonEmpezarPartida = () => {
  const btnEmpezarPartida = document.getElementById("empezarPartida");

  if (
    btnEmpezarPartida !== null &&
    btnEmpezarPartida !== undefined &&
    btnEmpezarPartida instanceof HTMLButtonElement
  ) {
    btnEmpezarPartida.addEventListener("click", () => {
      iniciaPartida(tablero);
      actualizarTablero();
      actualizarContadorTurnos();
    });
  }
};
