import App from "./App.js";
import { shuffleCards } from "./App.js";
import { flipCard } from "./App.js";
import { endGame } from "./App.js";

describe("App", () => {
  it("should render without crashing", () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe("shuffleCards", () => {
  it("deve embaralhar as cartas", () => {
    const cartas = ["A", "B", "C", "D", "E"];
    const cartasEmbaralhadas = shuffleCards(cartas);

    // Verifica se as cartas foram embaralhadas
    expect(cartasEmbaralhadas).not.toStrictEqual(cartas);

    // Verifica se todas as cartas originais estão presentes nas cartas embaralhadas
    expect(cartasEmbaralhadas.sort()).toEqual(cartas.sort());
  });

  it("não deve modificar o número de cartas", () => {
    const cartas = ["A", "B", "C", "D", "E"];
    const cartasEmbaralhadas = shuffleCards(cartas);

    // Verifica se o número de cartas não foi modificado
    expect(cartasEmbaralhadas.length).toEqual(cartas.length);
  });

  it("deve retornar um array vazio se não houver cartas", () => {
    const cartas = [];
    const cartasEmbaralhadas = shuffleCards(cartas);

    // Verifica se um array vazio foi retornado
    expect(cartasEmbaralhadas).toEqual([]);
  });
});

describe("flipCard", () => {
  it("deve retornar se o elemento clicado é um cartão virado", () => {
    // Cria um elemento HTML simulando um cartão virado
    const cartaoVirado = document.createElement("div");
    cartaoVirado.className = "flip__card";
    const clickEventCartaoVirado = { target: { parentNode: cartaoVirado } };

    // Cria um elemento HTML simulando um cartão não virado
    const cartaoNaoVirado = document.createElement("div");
    cartaoNaoVirado.className = "outro__elemento";
    const clickEventCartaoNaoVirado = {
      target: { parentNode: cartaoNaoVirado },
    };

    // Verifica se a função retorna quando o elemento clicado é um cartão virado
    expect(flipCard(clickEventCartaoVirado)).toBeUndefined();

    // Verifica se a função não retorna quando o elemento clicado não é um cartão virado
    expect(flipCard(clickEventCartaoNaoVirado)).toBeUndefined();
  });
});

describe("endGame", () => {
  it("deverá mostrar uma mensagem de parabéns se houver 10 cartões desativados", () => {
    // Chama a função endGame
    endGame();

    // Verifica se o método querySelectorAll foi chamado com o seletor correto
    expect(document.querySelectorAll).toHaveBeenCalledWith(".disabled__card");

    // Verifica se a mensagem de parabéns foi exibida
    expect(window.alert).toHaveBeenCalledWith("PARABÉNS!! VOCÊ GANHOU!!!!!");
  });

  it("não deve mostrar mensagem de felicitações se houver menos de 10 cartões desativados", () => {
    // Simula que existem menos de 10 cartas desabilitadas
    document.querySelectorAll.mockReturnValue(() => ({ length: 9 }));

    // Chama a função endGame
    endGame();

    // Verifica se o método querySelectorAll foi chamado com o seletor correto
    expect(document.querySelectorAll).toHaveBeenCalledWith(".disabled__card");

    // Verifica se a mensagem de parabéns não foi exibida
    expect(window.alert).not.toHaveBeenCalled();
  });
});
