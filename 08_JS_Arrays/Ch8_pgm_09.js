
// Using the arguments passed by forEach

var players;
var showArguments;

players = [ "Dax", "Jahver", "Kandra", "Rex", "Luna" ];  


showArguments = function (item, index, wholeArray) {
  console.log("Item: " + wholeArray[index]);  
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
  console.log("Array Length: " + wholeArray.length);  
};


players.forEach(showArguments);


players.forEach((item, index, wholeArray) => {
  console.log("Item: " + wholeArray[index]);  
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
  console.log("Array Length: " + wholeArray.length);  
});


var showItems = (message) => {
    console.log(message || "Dream destinations:");
    console.log("Number of places to visit: " + players.length);

    players.forEach(item => {
        console.log(" – " + item);
    });
};


showItems("Check out these awesome players!");


var upperCasePlayers = players.map(player => player.toUpperCase)



/* Further Adventures
 *
 * 1) Add two more names to the players array.
 *
 * 2) Run the program.
 *
 * 3) Change the first console.log so
 *    it uses wholeArray and index
 *    to display the current item in
 *    the array. Don't use the item
 *    parameter.
 *
 */
