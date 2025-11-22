interface InfoCarta {
  idFoto: number;
  imagen: string;
}

const infoCartas: InfoCarta[] = [
  {
    idFoto: 0,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
  },
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png",
  },
  {
    idFoto: 4,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png",
  },
  {
    idFoto: 5,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png",
  },
];

const coleccionCartas: InfoCarta[] = [...infoCartas, ...infoCartas];

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
