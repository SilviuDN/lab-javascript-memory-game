class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards(arr) {
    // ... write your code here
    if(this.cards){
      // return shuffle(arr)
      this.cards = shuffle(this.cards)
      return this.cards
    }    
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1
    if( card1 == card2 ){
      this.pairsGuessed += 1
      return true
    }
    return false
    // this.pairsGuessed += ( card1 == card2 )
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed == ( this.cards.length / 2 )
  }
}




