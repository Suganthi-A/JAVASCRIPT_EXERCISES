
// Planet constructor function with methods to update type, move position, and static methods
var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;

    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
    };

    
    this.updateType = function (newType) {
        this.type = newType;
        console.log(`${this.name}'s type updated to ${this.type}`);
    };

    
    this.moveTo = function (newPosition) {
        this.position = newPosition;
        console.log(`${this.name} moved to position ${this.position}`);
    };
};


Planet.createDefaultPlanet = function () {
    return new Planet("Default Planet", 0, "Unknown");
};


var planet1 = new Planet("Jupiter", 5, "Gas Giant");
var planet2 = new Planet("Saturn", 6, "Gas Giant");


planet1.showPlanet();


planet2.showPlanet();


planet1.updateType("Failed Star");


planet1.moveTo(7);
planet1.showPlanet();


var defaultPlanet = Planet.createDefaultPlanet();
defaultPlanet.showPlanet();





/* Further Adventures
 *
 * 1) Use the Planet constructor function
 *    to create a second planet.
 *    Don't forget the 'new' keyword.
 *
 * 2) Call the showPlanet method on your
 *    newly created planet.
 *
 */
