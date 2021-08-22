// A temp function for finding a random monster

// Pass: player object
// Return: a monster from the list of enemies
// The func takes the players level and uses
// that to grab a level appropriate monster
// from the master list of enemies. just a 
// temp function for proof of concept.

import enemies from '../util/enemies.js';

export default function monsterFinder(player){
    let level = player.level;

    // Find monsters between -3 and +3 levels
    // of the player. These are static vars
    // so they can be toggled for balance
    let levelFloor = Math.max(0, level-3);
    let levelCeil = level+3;
    let monsterValue = Math.ceil(Math.random()*level+levelCeil)
    console.log(monsterValue)
}