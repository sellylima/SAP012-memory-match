//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import jogos from '../data/jogos/jogos.js';
console.log(jogos);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

const App = () => {
  const el = document.createElement("div");

  el.className = "App";
  el.innerHTML = `<main>
  <div>
    <h1 class="titulo">Memory Game</h1>
    <p class="subtitulo"> Desafie seus amigos, teste sua concentração e
      agilidade com o jogo da memória </p>
  </div>
  <form class="form_login">
    <button type="submit" id="form_button" disabled>Jogar Novamente</button>
  </form>
 `;
  return el;
};


export default App;
