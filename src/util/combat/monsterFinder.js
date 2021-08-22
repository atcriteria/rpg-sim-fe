// A temp function for finding a random monster

// Pass: player object
// Return: a monster from the list of enemies
// The func takes the players level and uses
// that to grab a level appropriate monster
// from the master list of enemies. just a 
// temp function for proof of concept.

import monsterList from './enemies.js';

export default function monsterFinder(player){
    let level = player.level;

    // Find monsters up to +3 levels higher
    // than the player.
    let levelCeil = level+3;
    let adjustedLevel = Math.max(Math.floor(Math.random()*(level+levelCeil)),1)
    let monsters = monsterList(adjustedLevel)
    console.log(monsters)
}