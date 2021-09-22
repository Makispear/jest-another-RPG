const Potion = require('../lib/Potion');
const Character = require('./Character');

// CONSTRUCTOR FUNCTION 
// Makes player object with random stats
class Player extends Character {
    constructor(name = '') {
    super(name)
    this.inventory = [new Potion('health'), new Potion()];
    }

    // gets stats 
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        }
    }

    // shows players inventory 
    getInventory() {
        if (this.inventory.length) {
            return this.inventory
        } else {
            return false
        }
    }

    // adds potion to player 
    addPotion(potion) {
        this.inventory.push(potion)
    }

    // uses potion from players inventory 
    usePotion(index) {
        // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_splice
        const potion = this.getInventory().splice(index, 1)[0]

        switch (potion.name) {
            case 'agility': 
                this.agility += potion.value
                break
            case 'health': 
                this.health += potion.value 
                break
            case 'strength': 
                this.strength += potion.value 
                break
        }
    }
}

module.exports = Player;