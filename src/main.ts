const containerCarta = document.querySelectorAll(".container-carta");

containerCarta.forEach((carta) => {
  const voltearCarta = (): void => {
    const imagenCarta = carta.querySelector(".imagen-carta");

    if (
      carta instanceof HTMLElement &&
      imagenCarta instanceof HTMLImageElement
    ) {
      imagenCarta.classList.toggle("oculto");
      carta.classList.toggle("bg-frontal");
      carta.classList.toggle("bg-reves");
    }
  };
  if (carta instanceof HTMLElement)
    carta.addEventListener("click", voltearCarta);
});
