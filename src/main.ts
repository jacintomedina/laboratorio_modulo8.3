const containerCarta = document.querySelectorAll(".container-carta");

containerCarta.forEach((carta, indice) => {
  const infoCarta = coleccionCartas[indice];

  const elementoImagen = document.createElement("img");
  elementoImagen.src = infoCarta.imagen;
  elementoImagen.alt = `Carta ${infoCarta.idFoto}`;
  elementoImagen.classList.add("oculto");
  carta.appendChild(elementoImagen);

  const voltearCarta = (): void => {
    if (
      carta instanceof HTMLElement &&
      elementoImagen instanceof HTMLImageElement
    ) {
      elementoImagen.classList.toggle("oculto");
      carta.classList.toggle("bg-frontal");
      carta.classList.toggle("bg-reves");
    }
  };
  if (carta instanceof HTMLElement)
    carta.addEventListener("click", voltearCarta);
});
