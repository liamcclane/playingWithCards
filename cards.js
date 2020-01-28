/*
 * Assignment: Deck of Cards
 * Create a Card class. A card should have the following functionality:
 * 
 * Each Card should have a suit ("Hearts", "Clubs", "Diamonds", "Spades")
 * Each Card should have a string value (eg, "Ace", "Two", ...., "Queen", "King")
 * Each Card should have a numerical value (1-13)
 * Each Card should have a show method (log the card's information to the console)
 * Create a Deck class. A deck should have the following functionality:
 * 
 * The Deck should contain the 52 standard Cards
 * The Deck should be able to shuffle
 * The Deck should be able to reset
 * The Deck should be able to deal a random Card
 * Deal should return the Card that was dealt and remove it from the Deck
 * Now create a Player class. A Player should have the following functionality:
 * 
 * The Player should have a name
 * The Player should have a hand (an array of cards taken from a Deck)
 * The Player should be able to take a Card (use the deck.deal method)
 * The Player should be able to discard a Card
 * 
 */


class Card {
    constructor(suit, val) {
        this.suit = suit;
        this.val = val;
        // this.valString = this.blah(this.val);
    }

    blah(n) {
        var valToString = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven",
            "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        return valToString[n - 1];
    }

    info() {
        console.log(this.val,":",this.blah(this.val), "of", this.suit + "s");
        return this
    }

}
// var card1 = new Card("Heart", 11);
// card1.info()

class Deck {
    constructor() {
        /**
         * this.order =  function(){
         *  creating the deck
         * return newDeck
         * }
         * 
         * 
         * 
         */
        this.order = []
        this.value = 0;
        this.fillDeck();
    }

    checkTotalValOver31(){
        if(this.findValueForCribbage()>31){
            console.log("over 31");
            console.log("emptying the deck");
            this.empty();
            return this;
        } else{
            console.log(this.findValueForCribbage());
        }
    }

    findValueForCribbage(){
        for(let c of this.order){
            if(c.val>10){
                this.value += 10;
            } else {
                this.value += c.val;
            }
        }
        return this.value;
    }

    copy(c){
        return c;
    }

    addCard(c){
        this.order.push(c);
    }

    fillDeck() {
        let allSuits = ["Heart", "Spade", "Diamond", "Club"];
        let deck = []
        for (let s = 0; s < allSuits.length; s++) {
            for (let i = 0; i < 13; i++) {
                let c = new Card(allSuits[s], i + 1);
                deck.push(c)
                // this.order.push(c)
            }
        }
        /**
         * for(){
         *  c = new Card("spades",i)
         * }
         * for(){
         *  c= new Card("hearts",i)
         * }
         * 
         */
        this.order = deck
    }

    printWholeDeck() {
        for (let i = 0; i < this.order.length; i++) {
            this.order[i].info();
        }
    }

    shuffelDeck() {
        // for (let i = this.order.length - 1; i > 0; i--) {
        //     const j = Math.floor(Math.random() * (i + 1));
        //     [this.order[i], this.order[j]] = [this.order[j], this.order[i]];
        // }
        // return this;
        this.order.sort(() => Math.random() - 0.5)
        // this.order.sort(function(){ return Math.random() - 0.5})
        return this
    }

    resetDeck(){
        this.fillDeck();
    }

    dealRnCard(){
        let r = Math.floor(Math.random()*+this.order.length);
        let c = this.order[r]; 
        // console.log(r)
        this.order[r].info();
        this.order.splice(r,1);
        // delete this.order[r];

        // let ar = []
        // for(let i = 0; i <this.order.length; i++){
        //     if(this.order[i] != undefined){
        //         ar.push(this.order[i])
        //     }
        // }
        // this.order = ar
        return c
    }

    empty(){
        this.order=[];
    }
}
// Now create a Player class. A Player should have the following functionality:
//  * 
//  * The Player should have a name
//  * The Player should have a hand (an array of cards taken from a Deck)
//  * The Player should be able to take a Card (use the deck.deal method)
//  * The Player should be able to discard a Card
//  * 
class Player{
    constructor(name){
        this.name = name;
        this.hand = new Deck();
        this.hand.empty();
        this.score = 0;
    }
    
    pickUpRndCard(deck){
        if(deck.constructor != Deck){
            console.log("please input a deck")
            return this;
        }
        this.hand.push(deck.dealRnCard());
    }
    
    discard(card){
        if(this.hand.length == 0){
            console.log("you have no cards in your hand to discard")
            return this
        }
        let indC = 0;
        for(let i = 0; i < this.hand.length; i++ ){
            if(card === this.hand[i]){
                indC = i
            }
        }
        this.hand.splice(indC, 1)
        // delete this.hand[indC]
        // let ar = []
        // for(let i = 0; i <this.hand.length; i++){
        //     if(this.hand[i] != undefined){
        //         ar.push(this.hand[i])
        //     }
        // }
        // this.hand = ar
        return this
    }

    printWholeDeck() {
        for (let i = 0; i < this.hand.length; i++) {
            this.hand[i].info();
        }
    }
   
}


let myDeck = new Deck();
let discardIntoCount = new Deck();
let crib = new Deck()
let theStartCard = myDeck.dealRnCard();
console.log(theStartCard);
discardIntoCount.empty()
crib.empty()
myDeck.shuffelDeck();
console.log("***************************************")
// myDeck.printWholeDeck();
let lia = new Player("Lia")
let comp = new Player("computer")

// dealing out the cards
for(let i=0; i<6; i++){
    lia.hand.addCard(myDeck.dealRnCard());
    comp.hand.addCard(myDeck.dealRnCard());
}
console.log(myDeck.order.length);

// discarding into the crib
crib.addCard(lia.hand.dealRnCard())
crib.addCard(lia.hand.dealRnCard())
crib.addCard(comp.hand.dealRnCard())
crib.addCard(comp.hand.dealRnCard())


console.log("lia's hand*****");
lia.hand.printWholeDeck()
console.log("comp's hand********");
comp.hand.printWholeDeck();

for(let i = 0; i < 4; i++){
    discardIntoCount.addCard(lia.hand.order[i]);
    discardIntoCount.checkTotalValOver31();
    discardIntoCount.addCard(comp.hand.order[i]);
    discardIntoCount.checkTotalValOver31();
}
console.log("count's hand***********");
discardIntoCount.printWholeDeck();
console.log(`+-+-+-+-+-+-+the discard card val is is ${discardIntoCount.findValueForCribbage()}`);
