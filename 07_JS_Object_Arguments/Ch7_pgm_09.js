
// Finding a character with indexOf

var message = "We choose to go to the Moon!";

var goIndex = message.indexOf("go");
console.log(goIndex);  
console.log(message.substr(goIndex, 2)); 


var chooseIndex = message.indexOf("choose");
console.log(chooseIndex);  
console.log(message.substr(chooseIndex, 7));  

var lastOoIndex = message.lastIndexOf("oo");
console.log(lastOoIndex);  
console.log(message.substr(lastOoIndex, 2));  






/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */
