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

   if(referencia.firstChild === null){
      let arrayChoose = randomWord("Pokemon");
        for(let i = 0; i < arrayChoose.length; i++){
        let elemento = document.createElement("input");
        elemento.classList.add("boxSize");
        referencia.appendChild(elemento);
        }
   }
   else {
       alert("Palavra já foi criada!");
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
       let arrayWords = ["pikachu","charmander","dragonite","psyduck"];
       let randomArrayElement = getRandomInt(0,4);
       return arrayWords[randomArrayElement];
   }else {
       console.log("Topic is incorrect!");
   }
}        