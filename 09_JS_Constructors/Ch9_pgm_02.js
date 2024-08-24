// Adding methods to our constructed object

var buildPlanet = function (name, position, type) {
    var planet = {};
  
    planet.name = name;
    planet.position = position;
    planet.type = type;


    planet.showPlanet = function () {
        var info = planet.name;
        info += ": planet " + planet.position;
        info += " - " + planet.type;
        console.log(info);
    };

   
    planet.updateType = function (newType) {
        this.type = newType;
        console.log(`${this.name} type updated to ${this.type}`);
    };


    planet.moveTo = function (newPosition) {
        this.position = newPosition;
        console.log(`${this.name} moved to position ${this.position}`);
    };
  
    return planet;
};


var planet1 = buildPlanet("Jupiter", 5, "Gas Giant");
var planet2 = buildPlanet("Saturn", 6, "Gas Giant");


planet1.showPlanet();
planet2.showPlanet();


planet1.updateType("Failed Star");  
planet2.moveTo(7);


function Planet(name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;

    this.showPlanet = function () {
        var info = this.name;
        info += ": planet " + this.position;
        info += " - " + this.type;
        console.log(info);
    };

    this.updateType = function (newType) {
        this.type = newType;
        console.log(`${this.name} type updated to ${this.type}`);
    };

    this.moveTo = function (newPosition) {
        this.position = newPosition;
        console.log(`${this.name} moved to position ${this.position}`);
    };
}


Planet.createDefaultPlanet = function () {
    return new Planet("Default Planet", 0, "Unknown");
};


var defaultPlanet = Planet.createDefaultPlanet();
defaultPlanet.showPlanet(); 



/* Further Adventures
 *
 * 1) Create a second planet.
 *    Use the buildPlanet function.
 *
 * 2) Call the showPlanet method on your
 *    new planet.
 *
 */