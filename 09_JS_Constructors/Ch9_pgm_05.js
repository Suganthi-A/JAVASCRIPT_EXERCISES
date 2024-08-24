
// Including a moons array in our Planet constructor


var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];

    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info += " - " + this.type;
        console.log(info);
        console.log("Moons: " + this.moons.join(', ') + ".");
    };

    this.addMoon = function (moon) {
        this.moons.push(moon);
    };

  
    this.removeMoon = function () {
        if (this.moons.length > 0) {
            this.moons.pop();
            console.log(`${this.name} lost the last moon.`);
        } else {
            console.log(`${this.name} has no moons to remove.`);
        }
    };

    
    this.countMoons = function () {
        console.log(`${this.name} has ${this.moons.length} moon(s).`);
    };

   
    this.findMoon = function (moon) {
        if (this.moons.includes(moon)) {
            console.log(`${moon} is a moon of ${this.name}.`);
        } else {
            console.log(`${moon} is not a moon of ${this.name}.`);
        }
    };

    
    this.listMoonsAlphabetically = function () {
        var sortedMoons = this.moons.slice().sort();
        console.log(`Moons of ${this.name} in alphabetical order: ${sortedMoons.join(', ')}.`);
    };
};


var planet1 = new Planet("Jupiter", 5, "Gas Giant");
var planet2 = new Planet("Mars", 4, "Terrestrial");


planet1.addMoon("Io");
planet1.addMoon("Europa");
planet2.addMoon("Phobos");
planet2.addMoon("Deimos");
planet2.addMoon("Olympus");


planet1.showPlanet();
planet1.listMoonsAlphabetically();

planet2.showPlanet();
planet2.listMoonsAlphabetically();




/* Further Adventures
 *
 * 1) Create a second planet.
 *    Make one up if you like.
 *
 * 2) Add three moons to the second planet.
 *
 * 3) Call the showPlanet method
 *    on the second planet.
 *
 * 4) Add a removeMoon method
 *    that removes the last moon
 *    from the moons array.
 *
 */
