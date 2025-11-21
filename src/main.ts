function barajarCartas(carta: any): void {
  // Inicializamos un índice 'currentIndex' en la longitud del array.
  let currentIndex = carta.length;
  let randomIndex: number;

  // Mientras queden elementos a barajar.
  while (currentIndex !== 0) {
    // Elegimos un elemento restante al azar.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Intercambiamos el elemento actual con el elemento elegido al azar.
    [carta[currentIndex], carta[randomIndex]] = [
      carta[randomIndex],
      carta[currentIndex],
    ];
  }

  return carta;
}
