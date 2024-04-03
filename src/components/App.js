import dataJogo from "../data/jogos/dataJogo.js";
console.log(dataJogo);

//duplica cartas
const duplicaCartas = () => {
  const duplicaJogo = dataJogo.items.concat(dataJogo.items); //metodo concatenação
  console.log(duplicaJogo);
};

//embaralha as cartas
// const embaralhaCartas = (cards) => {
//   for(let i = dataJogo.length - 1; i > 0; i--) {
    
//   }
// };

//verificar se as cartas são iguais
//desabilitar as cartas se não iguais
//desvirar as cartas se não forem iguais

//  HTML
const App = () => {
  const el = document.createElement("div");

  el.className = "App";
  el.innerHTML = `<main>
  <div>
    <h1 class="titulo">Memory Game</h1>
    <p class="subtitulo"> Desafie seus amigos, teste sua concentração e
      agilidade com o jogo da memória </p>
  </div>
  <div class="container">
  <div class="cards">
    <div class="imagem frente"></div> 
    <div class="imagem verso"></div>
  </div>
</div>
  <form class="form_login">
    <button type="submit" id="form_button" disabled>Jogar Novamente</button>
  </form>
 `;

  duplicaCartas();
  return el;
};

export default App;
