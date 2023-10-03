// # Password generator

// ## chiedere all'utente il suo nome

//   - dichiarare una variabile

      let userName;

//   - assegnare alla variabile il valore restituito dal prompt

    userName = prompt ("Qual è il tuo nome?");
    console.log(userName);

// ## chiedere all'utente il suo cognome

//   - dichiarare una variabile
      
    let userSurname;

//   - assegnare alla variabile il valore restituito dal prompt

      userSurname = prompt("Qual è il tuo cognome?");
      console.log(userSurname);

// ## chiedere all'utente il suo colore preferito

//   - dichiarare una variabile

      let color;

//   - assegnare alla variabile il valore restituito dal prompt

      color = prompt("Qual è il tuo colore preferito?");
      console.log(color);

// ## Scrivere risultato concatenazione

//    - dichiarare una variabile dove concateniamo le stringhe sopra

      const message ="La tua password è: " + userName + userSurname + color + 21;
      console.log(message);
   
//    - inserire nell'html un tag h1 con id scelto

//    - recuperare dall'html con js l'elemento con lo stesso id scelto 
      
       const domOutput = document.getElementById("output");
    
//    - modificare l'innerHTML del h1 inserito in html con il valore della variabile con id scelto
      
      domOutput.innerHTML = message;