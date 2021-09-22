const Potion = require('../lib/Potion');

// CONSTRUCTOR FUNCTION 
// Makes player object with random stats
function Player(name = '') {
    this.name = name;
  
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
}

// gets stats 
Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    }
}

// shows players inventory 
Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory
    } else {
        return false
    }
}

// gets health of player 
Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`
}

Player.prototype.isAlive = function() {
    if (this.health === 0) {
        return false
    }
     return true
}

// reduces health of player 
Player.prototype.reduceHealth = function(health) {
    // SAME AS: this.health = health 'the property' - health 'the parameter' 
    this.health -= health

    if (this.health < 0) {
        this.health = 0
    }
}

// gets attack value of player 
Player.prototype.getAttackValue = function() {
    const min = this.strength - 5
    const max = this.strength + 5

    // RULE FOR GETTING VALUE BETWEEN 2 NUMBERS 
    return Math.floor(Math.random() * (max - min) + min)
}

// adds potion to player 
Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion)
}

// uses potion from players inventory 
Player.prototype.usePotion = function(index) {
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

module.exports = Player;