// A Character is a living creature in the game space.
// These encompass players as well as monsters and 
// any other creature that can be attacked.

import submitPlayer from './submitPlayer';
import Inventory from './item-system/inventory';

const MAX_XP_LOSS = .75;
const BASE_TNL_INCREASE = 10;
const MONSTER_MONIES_MULTIPLIER = 2.75;
const DEFAULT_MONIES_FOR_COMBAT = 10;

// Pass character level
// Return TNL
const determineTNL = (level) => {
    if (level === 1){
        return 100
    } else {
        return 100 + (level * BASE_TNL_INCREASE - 10);
    }
}

export default class Character {
    constructor(character){
        this.name = character.name;
        this.player = (character.player) ? true: false;
        this.img = character.img;
        this.level = character.level;
        this.hp = character.hp;
        this.maxHP = character.maxHP;
        this.sp = character.sp;
        this.maxSP = character.maxSP;
        this.atk = character.atk;
        this.def = character.def;
        this.accuracy = character.accuracy;
        this["sp-atk"] = character["sp-atk"] ;
        this["sp-def"] = character["sp-def"];
        this.xp = character.xp;
        this.deaths = (character.player) ? character.deaths : null;
        this.lastXPLost = (character.player) ? character.lastXPLost : 0;
        this.tnl = determineTNL(character.level);
        this.monies = (character.player) ? character.monies : (Math.ceil(character.level * MONSTER_MONIES_MULTIPLIER));
        this.inventory = (character.inventory) ? new Inventory(character.inventory.items) : null;
    }
    // Returns true if we are a player
    // Returns false is we are not a player
    isPlayer(){
        if (this.player){
            return true
        } else {
            return false
        }
    }
    // Saves the player object to local storage
    save(){
        // don't save if we arent a player
        if (!this.isPlayer){
            return
        } else {
            return submitPlayer(this)
        }
    }
    // Check if we are alive or not
    isAlive(){
        if (this.hp > 0){
            return true
        } else {
            return false
        }
    }
    // Give the character some XP and determine
    // if they should level up.
    // Pass: a monster obj with an xp property
    gainXP(monster){
        let xp = monster.xp;
        this.xp += xp;
        (monster.monies) ? this.addMonies(monster.monies) : this.addMonies(DEFAULT_MONIES_FOR_COMBAT);
        if (this.xp >= this.tnl){
            this.levelUp();
        }
        this.save();
        return;
    }
    levelUp(){
        // If we aren't a player, don't bother
        if (!this.isPlayer()){
            return
        }
        // Level us up
        this.level += 1;
        this.maxHP += 2;
        this.maxSP += 1;
        this.refreshStats();
        this.atk += 2;
        this.def += 0;
        this.accuracy += 0;
        this.xp = 0;
        this.updateCharTNL(this.level);
        this.save();
        return;
    }
    // Kills a player character
    kill(){
        // Sanity check
        if (!this.isPlayer()){
            return
        }
        this.refreshStats();
        let prevXP = this.xp;
        this.xp = Math.floor(this.xp*MAX_XP_LOSS);
        this.lastXPLost = prevXP-this.xp;
        this.deaths += 1;
        return;
    }
    // sets HP and SP to max values
    // Useful when dying and fully healing
    refreshStats(){
        this.hp = this.maxHP;
        this.sp = this.maxSP;
        return;
    }
    // Applies damage to the character.
    // We handle player death in the combat function
    // Pass int damage value
    takeDamage(damage){
        // Pick a random amount between 0 and the chars armor level
        let armorValue = Math.round(Math.random()*this.def);
        // If we our damage is lower than the armor score, return
        if (damage < armorValue){
            return 0
        } else {
            this.hp = this.hp - (damage-armorValue);
            return damage-armorValue
        }
    }
    updateCharTNL(level){
        this.tnl = determineTNL(level);
        return;
    }
    addMonies(amountMonies){
        this.monies = this.monies + amountMonies;
        return;
    }
    subtractMonies(amountMonies){
        this.monies = this.monies - amountMonies;
        return;
    }
    // Returns the Inventory Class
    getInventory(){
        return this.inventory;
    }
    // Returns the Items in inventory.items as an Array
    getInventoryItems(){
        let arr = []
        for (const item in this.inventory.items){
            arr.push(this.inventory.items[item])
        }
        return arr;
    }
};