import game from "../data/game/game.js";

//   ESTRUTURA HTML DINAMICA
const App = () => {
  const el = document.createElement("div");

  const arrayCards = shuffleCards(duplicateCards());

  el.className = "App";
  el.innerHTML = `<div>
  <div class="banner">
    <h1 class="titulo">Memory Game</h1>
    <p class="subtitulo"> Desafie seus amigos, teste sua concentração e
      agilidade com o jogo da memória </p>
  </div>
  <div class="card__container">
  </div>
  </div>
  <form class="form_login">
    <button type="submit" id="form_button">Jogar Novamente</button>
  </form> 
  </div>
 `;

  const cardContainer = el.querySelector(".card__container");

  arrayCards.forEach((carta) => {
    cardContainer.innerHTML += `
    <div class="card"  >
    <div class="face  front"><img src="../img/${carta.image}.png"></div>
    <div class="face  back" data-nome-jogo="${carta.image}"><img src="../img/verso-card.png"></div>
  </div>
    `;
  });

  const nodeListCard = el.querySelectorAll(".card");

  nodeListCard.forEach((carta) => {
    carta.addEventListener("click", flipCard);
  });

  //RELOAD BOTAO
  const button = el.querySelector("#form_button");

  button.addEventListener("click", () => {
    location.reload();
  });

  return el;
};

let firstCard = ""; //guarda a informação da primeira carta
let secondCard = ""; //guarda a informação da segunda carta

//DUPLICA CARTAS
const duplicateCards = () => {
  const duplicaJogo = game.concat(game); //metodo concatenação com array de objetos
  return duplicaJogo;
};

//EMBARALHAR CARTAS

export const shuffleCards = (cartasDuplicadas) => {
  const shuffle = [...cartasDuplicadas].sort(() => Math.random() - 0.5); // uso operador spread(´...´) para evitar a modifiação atual função que retorna um numero aleatório 
  return shuffle;
};

//COMPARA SE AS CARTAS SÃO IGUAIS E DESVIRA
const checkCards = () => {
  const firstCardJogo = firstCard.getAttribute("data-nome-jogo"); //get função que pega um pedaço de um elemento especifico
  const secondCardJogo = secondCard.getAttribute("data-nome-jogo");

  if (firstCardJogo === secondCardJogo) {
    firstCard.parentNode.classList.add("disabled__card");
    secondCard.parentNode.classList.add("disabled__card");

    firstCard = "";   //string vazia, p/ que ela não seja mais considerada como uma carta selecionada
    secondCard = "";

    endGame();    // chamei a função para verificar se todas as cartas foram encontradas e encerrar o jogo se for o caso

  } else {
    //escondendo as cartas reveladas caso a pessoa errar
    setTimeout(() => {
      firstCard.classList.remove("flip__card");
      secondCard.classList.remove("flip__card");

      firstCard = "";
      secondCard = "";
    }, "500");  //definido tempo limite 
  }
};

//REVELA E VERIFICA CARTA
export const flipCard = ({ target }) => {
  //target revela o "alvo/elemento" que esta sendo clicado
  if (target.parentNode.className.includes("flip__card")) {  // verifica se o elemento pai (parentNode) do elemento alvo (target) possui uma classe chamada "flip__card"
    return;
  }

  //se o item já foi clicado, não vai fazer nada
  if (firstCard === "") {
    target.parentNode.classList.add("flip__card");
    firstCard = target.parentNode;
  } else if (secondCard === "") {
    target.parentNode.classList.add("flip__card");
    secondCard = target.parentNode;
    checkCards();
  }
};

//FINALIZA O GAME
export const endGame = () => {
  const disabledCards = document.querySelectorAll(".disabled__card");

  if (disabledCards.length == 10) {
    alert("PARABÉNS!! VOCÊ GANHOU!!!!!");
  }
};

export default App;
