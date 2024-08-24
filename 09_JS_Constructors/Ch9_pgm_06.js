
// Planet constructor function with enhanced methods for moons
var Planet = function (name, position, type) {}
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];  
    this.showPlanet = function () {
        console.log(this.name);
        console.log("Planet " + this.position + " - " + this.type);
        this.showMoons(); 
    };

    
    this.addMoon = function (moon) {
        this.moons.unshift(moon); 
    };

    
    this.removeMoon = function () {
        if (this.moons.length > 0) {
            const removedMoon = this.moons.pop();
            console.log(`${this.name} lost the moon ${removedMoon}.`);
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

  
    this.showMoons = function () {
        console.log("Moons:");
        this.moons.forEach((moon, index) => {
            console.log(`(${index}) ${moon}`);
        });
    };

    
    this.getMoon = function (index) {
        if (index >= 0 && index < this.moons.length) {
            return this.moons[index];
        } else {
            return null; 
        }
    };

    
    this.listMoonsAlphabetically = function () {
        const sortedMoons = this.moons.slice().sort();
        console.log(`Moons of ${this.name} in alphabetical order: ${sortedMoons.join(', ')}.`);
    };

   
    this.sortMoonsReverse = function () {
        const reverseSortedMoons = this.moons.slice().sort().reverse();
        console.log(`Moons of` )}


/* Further Adventures
 *
 * 1) Add a new moon to each planet.
 *
 * 2) Create a showMoons method in the
 *    Planet constructor. It should
 *    show the moons with their index.
 *
 *    (0) Io
 *    (1) Europa
 *
 * 3) Update showPlanet to use showMoons
 *    rather than join for the moons.
 *
 * 4) Create a getMoon method that
 *    returns the moon at a given
 *    index.
 *
 *    > planet1.getMoon(1)
 *      Europa
 *
 */
