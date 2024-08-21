
// Calling forEach with an inline function

var items = [ "The Pyramids", "The Grand Canyon", "Bondi Beach" ];


var showItems = function() {
    console.log("Dream destinations:");
    console.log("Number of places to visit: " + items.length);

    items.forEach(function (item) {
        console.log(" – " + item);
    });
};


showItems();


items.push("Machu Picchu");
items.push("Christ the Redeemer");
items.splice(1, 1); 
showItems();


var showItems = () => {
    console.log("Dream destinations:");
    console.log("Number of places to visit: " + items.length);

    items.forEach(item => console.log(" – " + item));
};


showItems();


var showItems = (message) => {
    console.log(message || "Dream destinations:");
    console.log("Number of places to visit: " + items.length);

    items.forEach(item => console.log(" – " + item));
};


showItems("Check out these awesome places to visit!");


items.forEach((item, index, array) => {
    console.log(`Item ${index + 1}: ${item} (Array length: ${array.length})`);
});


var uppercaseItems = items.map(item => item.toUpperCase());
console.log(uppercaseItems);


var beachDestinations = items.filter(item => item.includes("Beach"));
console.log(beachDestinations);


var totalLength = items.reduce((total, item) => total + item.length, 0);
console.log("Total length of all item names: " + totalLength);


function findLongestItem(arr) {
    return arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

console.log(findLongestItem(items)); 


function removeItem(arr, itemToRemove) {
    let index = arr.indexOf(itemToRemove);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}

console.log(removeItem(items, "Bondi Beach"));


function sortItems(arr) {
    return arr.slice().sort();
}

console.log(sortItems(items));  




/* Further Adventures
 *
 * 1) Change the program to show the number of
 *    places to visit as well as the places themselves.
 *
 * 2) Wrap the display code in a function
 *    and assign it to the showItems variable.
 *
 * 3) Click after the prompt on the console,
 *    type showItems() and press Enter.
 *    Can you run your function from the console?
 *
 * 4) Add and remove array items via the console
 *    and display the current state of the array
 *    with the showItems function.
 *
 * You can press the up arrow when working at the
 * console prompt to show previous commands used.
 *
 */
