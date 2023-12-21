// const opciones = ["ROCK", "PAPER", "SCISSORS"];

// function getComputerChoice(){


//   // Genera un índice aleatorio en el rango [0, longitud del arreglo)
//   const indiceAleatorio = Math.floor(Math.random() * opciones.length);
//   console.log(indiceAleatorio)

//   // Accede a la cadena en el índice aleatorio
//   const opcionAleatoria = opciones[indiceAleatorio];
//   return opcionAleatoria
  
// }
// let choice = getComputerChoice()
// console.log(choice)
// function round_1(playerSelection, computerSelection){
//   if (playerSelection === "ROCK" && computerSelection === "SCISSORS" || playerSelection === "PAPER" && computerSelection === "ROCK" || playerSelection === "SCISSORS" && computerSelection === "PAPER"){
// alert("YOU WIN")
//   }else if (playerSelection === "SCISSORS" && computerSelection === "ROCK" || playerSelection === "ROCK" && computerSelection === "PAPER" || playerSelection === "PAPER" && computerSelection ==="SCISSORS"){
//     alert("YOU LOSE")
//   }else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS" || playerSelection === "ROCK" && computerSelection === "ROCK" || playerSelection === "PAPER" && computerSelection ==="PAPER"){
//       alert("YOU DRAW")}
    

// }
// round_1(playerChoice, getComputerChoice())

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumaPares = 0;
let contadorImpares = 0;

for (let i = 0; i < numeros.length; i++) {
  const numeroActual = numeros[i];
  console.log(numeroActual)
  if (numeroActual % 2 === 0) {
    // Sumar números pares
    sumaPares += numeroActual;
  } else {
    // Contar números impares
    contadorImpares++;
  }
}

console.log("Suma de números pares: " + sumaPares);
console.log("Cantidad de números impares: " + contadorImpares);
