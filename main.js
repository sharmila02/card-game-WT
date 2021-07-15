import Deck from './deck.js'

let deck = new Deck();

//console.log(deck);

let cards = deck['cards']
//console.log(cards[0])

function getRandom(arr) {
        return Math.floor(Math.random() * arr.length);
}

function cardColor(s){
    if (s == "♠" || s == "♣"){
        return "black";
    }
    return "red";
}

document.querySelector('#imgbutton').addEventListener('click', displayRandomCards);

function displayRandomCards(){
    let rand_i = null;
    for(let i = 0; i < 10; i++){
        rand_i = getRandom(cards);
        //console.log("len" + cards.length);
        const c = document.getElementById(i);
        c.innerHTML = cards[rand_i]['suit'];
        c.dataset.value = cards[rand_i]['value'] + cards[rand_i]['suit'];
        c.className = "card " + cardColor(cards[rand_i]['suit']);
        cards.splice(rand_i, 1);
    }
    cards = new Deck()['cards'];
}