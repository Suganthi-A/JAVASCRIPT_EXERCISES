// A function that adds properties to an object

var planet1 = { name: "Jupiter", radius: 69911 };


var calculateSizes = function (planet) {
    var r = planet.radius;
    planet.diameter = 2 * r;
    planet.area = 4 * Math.PI * r * r;
    planet.volume = 4 / 3 * Math.PI * r * r * r;
    planet.mass = 1.9e27;  
    planet.density = planet.mass / planet.volume;  
};

var displaySizes = function (planet) {
    console.log(planet.name);
    console.log("diameter = " + planet.diameter + " km");
    console.log("surface area = " + planet.area.toFixed(2) + " square km");
    console.log("volume = " + planet.volume.toFixed(2) + " cubic km");
    console.log("density = " + planet.density.toFixed(2) + " kg per cubic km");
};


calculateSizes(planet1);
displaySizes(planet1);


var planet2 = { name: "Saturn", radius: 58232 };
calculateSizes(planet2);
displaySizes(planet2);
                                                  
                                                  


/* Further Adventures
 *
 * The diameter of a planet is double its radius.
 *
 * 1) Update the calculateSizes function so it also
 *    adds a diameter property to the planet.
 *
 * 2) Update the displaySizes function so it also
 *    displays the diameter on the console.
 *
 */