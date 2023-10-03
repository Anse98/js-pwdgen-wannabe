// # Password generator

// ## chiedere all'utente il suo nome

//   - dichiarare una variabile

let userName;

//   - assegnare alla variabile il valore restituito dal prompt

userName = prompt ("Qual è il tuo nome?");
userName = userName.trim();

// ## chiedere all'utente il suo cognome

//   - dichiarare una variabile

      
let userSurname;

//   - assegnare alla variabile il valore restituito dal prompt

userSurname = prompt("Qual è il tuo cognome?");
userSurname = userSurname.trim()
// ## chiedere all'utente il suo colore preferito

//   - dichiarare una variabile

let color;

//   - assegnare alla variabile il valore restituito dal prompt

color = prompt("Qual è il tuo colore preferito?");
color = color.trim()

// ## Generare casualmente un numero da mettere nella password
  
//   - creare variabile che contenga le funzioni per generare un numero casuale

num = Math.round(Math.random() * 1000);

// ## Scrivere risultato concatenazione

//    - dichiarare una variabile dove concateniamo le stringhe sopra

const message ="La tua password è:  "+ userName + userSurname + color + num; 
  
//    - inserire nell'html un tag h1 con id scelto

//    - recuperare dall'html con js l'elemento con lo stesso id scelto 
      
const domOutput = document.getElementById("output");

//    - modificare l'innerHTML del h1 inserito in html con il valore della variabile con id scelto

domOutput.innerHTML = message;

