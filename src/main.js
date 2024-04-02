import App from "./components/App.js";

document.getElementById("root").appendChild(App());








// // FUNÇÃO PARA HABILITAR E DESABILITAR O BOTAO
// const inputLogin = document.getElementById("form_input");
// const buttonLogin = document.getElementById("form_button");

// const validandoInput = (event) => {
//   if (event.target.value.length > 3) {
//     // fiz uma condicional passando o target trouxe o valor que ta sendo digitado no nosso input  e pegar o num. de caracteres através do length
//     buttonLogin.removeAttribute("disabled");
//   } else {
//     buttonLogin.setAttribute("disabled", "");
//   }
//   console.log(event.target.value);
// };

// inputLogin.addEventListener("input", validandoInput);

// //FUNÇÃO PARA ENVIAR DADOS FORMULARIO

// const formLogin = document.querySelector('form_login');

// const envioDadosForm = (event) => {
    

// }

//  formLogin.addEventListener('submit', envioDadosForm);




// length - quantidade de caracteres
// target - obtem o elemento onde o evento ocorreu
// setAttribute - coloca um atributo (precisa passar dois parametros)
// preventDefault - previne/bloqueia o comportamento de recarregamento padrao de uma pagina