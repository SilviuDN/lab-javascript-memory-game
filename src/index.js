const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

const turnCard = card => {
  card.classList.toggle('turned')
}

const turnCardAndPlay = card => {
  turnCard(card)
  const cardName = card.getAttribute('data-card-name')
  card.id = cardName
  memoryGame.pickedCards.push( cardName )
  if( memoryGame.pickedCards.length == 2){
    checkPair()
  }
}

const checkPair = () => {
  if( memoryGame.checkIfPair( memoryGame.pickedCards[0], memoryGame.pickedCards[1] )){
    updateScore()
    if( memoryGame.checkIfFinished() ){
      finish()
    }
    emptyPickedCardsList()
  }else{
    updateScore()
    console.log(memoryGame.pickedCards)
    setTimeout( hidePickedCards, 500 )
    
  }
}

const finish = () => {
  alert('Bravo!')
}

const updateScore = () => {
  const pairsClickedSpan = document.getElementById('pairs-clicked')
  const pairsGuessedSpan = document.getElementById('pairs-guessed')

  pairsClickedSpan.textContent = memoryGame.pairsClicked
  pairsGuessedSpan.textContent = memoryGame.pairsGuessed


}

const hidePickedCards = () => {
  
  console.log('Inside hidePickedCards')
  console.log(memoryGame.pickedCards)
  const card1 = document.getElementById(memoryGame.pickedCards[0])
  const card2 = document.getElementById(memoryGame.pickedCards[1])

  card1.classList.toggle("turned")
  card2.classList.toggle("turned")
  card1.id = ''
  card2.id = ''
  emptyPickedCardsList()
  
}

const emptyPickedCardsList = () => {
  // console.log(memoryGame.pickedCards)
  memoryGame.pickedCards = []
  // console.log(memoryGame.pickedCards)
}

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.shuffleCards()
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      turnCardAndPlay(card)
    });
  });
});
