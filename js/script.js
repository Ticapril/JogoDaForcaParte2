//variaveis
let arrayWords = ["pikachu","charmander","dragonite","psyduck"];
let randomArrayElement;
let tentativas = 0;



//biblioteca de funções
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
   return Math.floor(Math.random() * (max -min)) + min;
}


// minhas funções
function createWord() {
    //pego o elemento div da página onde fica os inputs
    let referencia = document.getElementById("boxWord");
    let vetorInputs = document.querySelectorAll("input.boxSize:not(input#letraChute.boxSize)");
    

   if(referencia.firstChild === null){
      let arrayChoose = randomWord("Pokemon");
        for(let i = 0; i < arrayChoose.length; i++){
        let elemento = document.createElement("input");
        elemento.classList.add("boxSize");
        referencia.appendChild(elemento);
        }
   }
   else {
      //  alert("Palavra já foi criada!");
      removeWord();
      }
   }
function removeWord(){
   let filhos = document.querySelectorAll("input.boxSize:not(input#letraChute.boxSize)");
   if(filhos.length !== 0){
      for(let i = 0; i < filhos.length; i++){
         filhos[i].remove();
      }
   }else {
      alert("Não tem palavra para remover");
   }
}

function randomTopic(){
   let arrayTopics = ["Pokemon"];
   let valueRandom = getRandomInt(0,5);
   let topicRandom = arrayTopics[valueRandom];
   return topicRandom;
}
function randomWord(topic){
   if(topic === "Pokemon"){
       // console.log(topic + "Right!");
       randomArrayElement = getRandomInt(0,4);
       return arrayWords[randomArrayElement];
   }else {
       console.log("Topic is incorrect!");
   }
}

// Captura o valor do input do usuário e compara se o valor está na palavra formada


function checkWordType(){
   let flag = 0;
   let inputDigitado = document.getElementById("letraChute");
   let valorDigitadoUsuario = inputDigitado.value;
   for(let i = 0; i < arrayWords[randomArrayElement].length; i++){
      if(valorDigitadoUsuario === arrayWords[randomArrayElement].charAt(i)){
         let vetor = document.querySelectorAll("input.boxSize:not(input#letraChute.boxSize)");
         vetor[i].value = valorDigitadoUsuario;
         console.log("acertou!");
         flag++;
      }
   }
   if(flag === 0){
      tentativas++;
      alert("Errou!");
      desenhaBoneco();
   }
   

   // console.log("palavra não encontrada!");
}
function mostrarDica(){

   let dica = document.getElementById("dica");
   if(dica.innerHTML === ''){
      elementoCriado = document.createElement("h2");
      elementoCriado.textContent = "A dica é Pokêmon!";
      elementoCriado.classList.add("dicaEstilo");
      dica.appendChild(elementoCriado);
   }else {
      alert("A dica já foi exibida!");
   }
   
}
function desenhaBoneco(){
   let referencia;
   // if(tentativas == 1){
   //    referencia = document.getElementById("cabeca");
   //    referencia.classList.add("active");
   // }else if(tentativas == 2){
   //       referencia = document.getElementById("tronco");
   //       referencia.classList.add("active");
        
   // }
   switch (tentativas){
      case 1: 
         referencia = document.getElementById("cabeca");
         referencia.classList.add("active");
         break;
      case 2:
         referencia = document.getElementById("tronco");
         referencia.classList.add("active");
         break;
   }
        
   
}