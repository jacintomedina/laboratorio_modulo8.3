import { Tablero, tablero } from "./modelo";
import {
  sePuedeVoltearLaCarta,
  iniciaPartida,
  voltearLaCarta,
  sonPareja,
  parejaEncontrada,
  parejaNoEncontrada,
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
    esSegundaCarta(tablero);
    setTimeout(() => {
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

const obtenerMensaje = document.getElementById("mensaje");

export const mostrarMensaje = (texto: string) => {
  const mensaje = obtenerMensaje;
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLDivElement
  ) {
    mensaje.textContent = texto;
  }
};

export const limpiarMensaje = () => {
  const mensaje = obtenerMensaje;
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLDivElement
  ) {
    mensaje.textContent = "";
  }
};

export const ocultarImagenCarta = (indice: number) => {
  const elementoImagen = document.querySelector(
    `img[data-indice-id="${indice}"]`
  );

  if (
    elementoImagen !== null &&
    elementoImagen !== undefined &&
    elementoImagen instanceof HTMLImageElement
  ) {
    elementoImagen.src = "";
    const elementoDiv = elementoImagen.parentElement;
    elementoDiv?.classList.add("bg-reves");
  }
};

export const mostrarImagenCarta = (indice: number) => {
  const elementoImagen = document.querySelector(
    `img[data-indice-id="${indice}"]`
  );

  if (
    elementoImagen !== null &&
    elementoImagen !== undefined &&
    elementoImagen instanceof HTMLImageElement
  ) {
    elementoImagen.src = tablero.cartas[indice].imagen;
    const elementoDiv = elementoImagen.parentElement;
    elementoDiv?.classList.remove("bg-reves");
  }
};

export const esSegundaCarta = (tablero: Tablero) => {
  const indiceCartaA = tablero.indiceCartaVolteadaA;
  const indiceCartaB = tablero.indiceCartaVolteadaB;
  if (indiceCartaA !== undefined && indiceCartaB !== undefined) {
    if (sonPareja(indiceCartaA, indiceCartaB, tablero)) {
      parejaEncontrada(tablero, indiceCartaA, indiceCartaB);
    } else {
      parejaNoEncontrada(tablero, indiceCartaA, indiceCartaB);
    }

    tablero.intentos++;
  }
};
