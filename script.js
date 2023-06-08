// funzione per creare il tabellone

const board = document.getElementById("board");
for ( let i= 1; i <= 76; i ++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.innerText = i;
    board.appendChild(cell);
}



// creo array dove inserire i numeri estratti 
const extractedNumbers = [ ]
const playerCards = [ ]


// funzione per estrarre un numero 




const extractNumber = function () {

    if (extractedNumbers.length === 76) {
        alert("Hai estratto tutti i numeri!");
        return;
      }

      let number 
      do {
          number = Math.floor(Math.random() *76 ) +1;
          
      } while (extractedNumbers.includes(number))
  
   

    extractedNumbers.push(number)
    signedNumber(number)
}

  



// funzione per evidenziare i numeri estratti associandoli alla classe "selected"



const signedNumber = function (number) {

    const cells = document.getElementsByClassName("cell")

    for ( let i=0 ; i < cells.length; i++)  { 
       if( parseInt(cells[i].innerText) === number ) {
        cells[i].classList.add("selected");

    break
    }
}

     playerCards.forEach((playerCard) => {
    const playerCells = playerCard.getElementsByClassName("player-cell");
    for (let i = 0; i < playerCells.length; i++) {
      if (parseInt(playerCells[i].innerText) === number) {
        playerCells[i].classList.add("selected");
        break;
      }
    }
  });

}


// funzione per generare le tabelle del giocatore

const generatePlayerCards = function(cards) {

    const playerTabs = document.getElementById("player-cards")
    for ( let i = 0; i < cards; i++) {                       
        const playerCardDiv = document.createElement("div")             //creo il div che conterrà le card
        playerCardDiv.classList.add("player-card")

        for (let j = 0; j < 24; j++) {
            const playerCell = document.createElement("div");
            playerCell.className = "player-cell";
            const number = Math.floor(Math.random() * 76) + 1;
            playerCell.innerText = number;
            playerCardDiv.appendChild(playerCell);
          }


        
        playerCards.push(playerCardDiv);
        playerTabs.appendChild(playerCardDiv)


    }
}

  
    const numPlayerCards = parseInt(
        prompt("Inserisci il numero di tabelline con cui vuoi giocare:")
      );
      if (!isNaN(numPlayerCards)) {
        generatePlayerCards(numPlayerCards);
      } else {
        alert("Il numero di tabelline deve essere un valore numerico.");
      }