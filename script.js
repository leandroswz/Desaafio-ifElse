// //Exercicio 1

let idade = 18

if (idade >= 18){
    console.log("Idade:",idade)
}

// // Exercicio 2  -----------------------

let humano = true;
let age = 18

if (age >= 18 && humano === true) {
  console.log("maior de idade");
  console.log(humano)
}

// // Exercício 3 ------------------------

let aniversario = "Dezembro";

if (aniversario === "Dezembro" || "dezembro" || "Janeiro" || "janeiro") {
  console.log("É meu aniversario");
}

// // Exercício bônus 1 -------------------------

let nome = "Leandro"
let separaNome = nome.split("")
    console.log(separaNome)
if (separaNome[0] == "R"){
    console.log("Esse nome começa com a letra R")
}else{
    console.log("Esse nome não começa com a letra R")
}

//  Exercício bônus 2 -----------------------

let sobrenome = "Pereira";
if( (sobrenome.length >= 6) || (nome[0] === "E") ){
    console.log("Condição Verdadeira");
}else{
    console.log("Condição Falsa");
}