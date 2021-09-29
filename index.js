// Code your solutions in this file

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

const gifts = ["teddy bear", "drone", 'doll'];

function wrapGifts(gift) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

// wrapGifts(gifts);

function writeCards(arrayOfString, eventName) {
    const allMessages = [];
    for (let i = 0; i < arrayOfString.length; i++) {
        let message = `Thank you, ${arrayOfString[i]}, for the wonderful ${eventName} gift!`
        allMessages.push(message);
    }
    return allMessages;
}

// writeCards(["Ada", "Max", "Eve"], "wedding");

function countDown(positiveInteger) {
    let start = positiveInteger;
    while(start >= 0) {
        console.log(start)
        start--
    }
}

// countDown(5)