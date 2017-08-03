/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue (hand) {
  let sum = 0;
  let cardNumber = [];
  let aceNumber = 0;

  for (let i = 0; i < hand.length; i++) {
    if ((hand[i] === "K") || (hand[i] === "Q") || (hand[i] === "J")){
      hand[i] = 10;
      cardNumber.push(hand[i]);
    } else if (hand[i] === "A") {
      aceNumber = aceNumber + 1;
    } else
      cardNumber.push(parseInt(hand[i], 10));
  }

  // Sum card vals
  for (let j = 0; j < cardNumber.length; j++) {
    sum += cardNumber[j];
  }
  // Sum with Ace vals
  for (let a = 0; a < aceNumber; a++) {
    if ((aceNumber > 0) && (sum > 11)){
      let ace = 1;
      sum = ace + sum;
    }
    else if ((aceNumber > 0) && (sum < 11)){
      ace = 11;
      sum = ace + sum;
    }
  }
  console.log(cardNumber);
  console.log(sum);
  console.log(aceNumber);
  return sum;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11
*/
