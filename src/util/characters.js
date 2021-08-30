// A Character is a living creature in the game space.
// These encompass players as well as monsters and 
// any other creature that can be attacked.

import submitPlayer from './submitPlayer';

const MAX_XP_LOSS = .75;

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
        this.tnl = character.tnl;
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
        console.log("calling save")
        // don't save if we arent a player
        if (!this.isPlayer){
            return
        } else {
            submitPlayer(this)
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
        if (this.xp >= 100){
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
        console.log("leveled up")
        this.save();
        return;
    }
    // Kills a player character
    kill(){
        // Sanity check
        if (!this.isPlayer()){
            console.log(`You killed a ${this.name}`)
            return
        }
        this.refreshStats();
        this.xp = Math.floor(this.xp*MAX_XP_LOSS)
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
            return
        } else {
            this.hp = this.hp - (damage-armorValue);
            return;
        }
    }
};