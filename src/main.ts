const containerCarta = document.getElementById("container-carta");

const imagenCarta = document.getElementById("imagen-carta");

const voltearCarta = (): void => {
  if (
    containerCarta instanceof HTMLElement &&
    imagenCarta instanceof HTMLImageElement
  ) {
    imagenCarta.classList.toggle("oculto");
    containerCarta.classList.toggle("bg-frontal");
    containerCarta.classList.toggle("bg-reves");
  }
};
if (containerCarta instanceof HTMLElement)
  containerCarta.addEventListener("click", voltearCarta);
