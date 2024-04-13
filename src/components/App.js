import game from "../data/game/game.js";

//  HTML
const App = () => {
  const el = document.createElement("div");

  const arrayCartas = shuffleCards(duplicaCartas());

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

  arrayCartas.forEach((carta) => {
    cardContainer.innerHTML += `
    <div class="card"  >
    <div class="face  front"><img src="img/${carta.image}.png"></div>
    <div class="face  back" data-nome-jogo="${carta.image}"><img src="img/verso-card.png"></div>
  </div>
    `;
  });

  const nodeListCard = el.querySelectorAll(".card");

  nodeListCard.forEach((carta) => {
    carta.addEventListener("click", flipCard);
  });

  const button = el.querySelector("#form_button");

  button.addEventListener("click", () => {
    location.reload();
    console.log(button);
  });

  return el;
};

let firstCard = ""; //guarda a informação da primeira carta
let secondCard = ""; //guarda a informação da segunda carta

const endGame = () => {
  const disabledCards = document.querySelectorAll(".disabled__card");

  if (disabledCards.length == 10) {
    alert("PARABENS!! VOCÊ GANHOU!!!!!");
  }
};

//DUPLICA CARTAS
const duplicaCartas = () => {
  const duplicaJogo = game.concat(game); //metodo concatenação
  return duplicaJogo;
};

//EMBARALHAR CARTAS
const shuffleCards = (cartasDuplicadas) => {
  const shuffle = cartasDuplicadas.sort(() => Math.random() - 0.5); //função que retorna um numero aleatório
  //   console.log(shuffle);
  return shuffle;
};

//FINALIZA O JOGO
// const endGame = () => {
//   const disabledCards = el.querySelectorAll(".disabled__card");

//   if (disabledCards.length == 10) {
//     console.log("PARABENS!! VOCÊ GANHOU!!!!!");
//   }
// };

//COMPARA SE AS CARTAS SÃO IGUAIS
const checkCards = () => {
  const firstCardJogo = firstCard.getAttribute("data-nome-jogo");
  const secondCardJogo = secondCard.getAttribute("data-nome-jogo");

  if (firstCardJogo === secondCardJogo) {
    firstCard.parentNode.classList.add("disabled__card");
    secondCard.parentNode.classList.add("disabled__card");

    firstCard = "";
    secondCard = "";

    endGame();
  } else {
    //escondendo as cartas reveladas caso a pessoa errar
    setTimeout(() => {
      firstCard.classList.remove("flip__card");
      secondCard.classList.remove("flip__card");

      firstCard = "";
      secondCard = "";
    }, "500");
  }
};

//REVELA E VERIFICA CARTA
const flipCard = ({ target }) => {
  //target revela o "alvo/elemento" que esta sendo clicado
  if (target.parentNode.className.includes("flip__card")) {
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

//BUTTON

export default App;
