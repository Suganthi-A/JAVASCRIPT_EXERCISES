// Passing a function an object as an argument


var planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911, 
    sizeRank: 1,
    hasRings: true
};


var planet2 = {
    name: "Saturn",
    position: 6,
    type: "Gas Giant",
    radius: 58232,  
    sizeRank: 2,
    hasRings: true
};


var planet3 = {
    name: "Uranus",
    position: 7,
    type: "Ice Giant",
    radius: 25362, 
    sizeRank: 3,
    hasRings: true
};


var getPlanetInfo = function (planet) {
    return planet.name + ": planet number " + planet.position +
           ", Type: " + planet.type +
           ", Radius: " + planet.radius + " km" +
           ", Size Rank: " + planet.sizeRank +
           (planet.hasRings ? ", Has Rings" : ", No Rings");
};


console.log(getPlanetInfo(planet1)); 

console.log(getPlanetInfo(planet2)); 


console.log(getPlanetInfo(planet3)); 





/* Further Adventures
 *
 * 1) Create a second planet object.
 *
 * 2) Use getPlanetInfo to log details of
 *    the second planet.
 *
 * 3) Update the getPlanetInfo function to
 *    include more information about
 *    each planet.
 *
 */