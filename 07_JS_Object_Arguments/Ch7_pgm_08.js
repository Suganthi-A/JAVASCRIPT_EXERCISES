
// Finding substrings

var message = "We choose to go to the Moon!";


console.log(message.substr(24));          
console.log(message.substr(11, 8));       
console.log(message.substr(0, 10));        


console.log(message.substr(3));           


console.log(message.substr(-6));         
console.log(message.substr(-18, 8));     


console.log(message.substr(3, 0));        
console.log(message.substr(20, -5));      
console.log(message.substr(15, 100));     
console.log(message.substr(-5, 10));     
console.log(message.substr(-10, 5));

/* Further Adventures
 *
 * 1) Use substr to log the following parts of
 *    the message string to the console:
 *
 *    > Moon!
 *    > go to the
 *    > We choose
 *
 * 2) Investigate what happens if you omit the
 *    second argument when calling substr.
 *
 * 3) What happens if you use negative numbers
 *    as arguments?
 *
 */
