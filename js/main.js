console.log("up and running");
var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = []
var cardOne = cards[0]
var cardTwo = cards[2]

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo); 
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again");
	}
}
