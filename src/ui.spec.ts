import { vi } from "vitest";
import { iniciaPartida } from "./ui";
import * as motor from "./motor";
import { Tablero } from "./modelo";

describe("iniciaPartida", () => {
  it("debería barajar las cartas al iniciar la partida", () => {
    // 1. ARRANGE
    const carta1 = {
      idFoto: 1,
      imagen: "img1",
      estaVuelta: false,
      encontrada: false,
    };
    const carta2 = {
      idFoto: 2,
      imagen: "img2",
      estaVuelta: false,
      encontrada: false,
    };

    // Este es el resultado "trucado" que queremos que devuelva el mock
    const cartasBarajadasSimuladas = [carta2, carta1];

    const tablero: Tablero = {
      cartas: [carta1, carta2],
      estadoPartida: "CeroCartasLevantadas",
    };

    // 2. EL ESPÍA (MOCK)
    // "Espía el archivo 'motor'. Cuando alguien pida 'barajarCartas',
    // dale 'cartasBarajadasSimuladas' en vez de ejecutar la lógica real."
    const spyBarajar = vi
      .spyOn(motor, "barajarCartas")
      .mockReturnValue(cartasBarajadasSimuladas);

    // Act
    iniciaPartida(tablero);

    // Assert
    expect(tablero.cartas).toEqual(cartasBarajadasSimuladas);
    expect(spyBarajar).toHaveBeenCalled();
  });
});
