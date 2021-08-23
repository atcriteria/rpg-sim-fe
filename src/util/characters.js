// A Character is a living creature in the game space.
// These encompass players as well as monsters and 
// any other creature that can be attacked.

const MAX_XP_LOSS = .75;
const BASE_PLAYER_HP = 20
const BASE_PLAYER_SP = 5
const BASE_PLAYER_ATK = 5
const BASE_PLAYER_DEF = 0

export default class Character {
    constructor(character){
        this.name = character.name;
        this.player = (character.player) ? true: false;
        this.img = character.img;
        this.level = (character.player) ? 1 : character.level;
        this.hp = (character.player) ? BASE_PLAYER_HP + character.hp : character.hp;
        this.maxHP = (character.player) ? BASE_PLAYER_HP + character.hp : character.hp;
        this.sp = (character.player) ? BASE_PLAYER_SP + character.sp : character.sp;
        this.maxSP = (character.player) ? BASE_PLAYER_SP + character.sp : character.sp;
        this.atk = (character.player) ? BASE_PLAYER_ATK + character.atk : character.atk;
        this.def = (character.player) ? BASE_PLAYER_DEF + character.def : character.def;
        this.accuracy = (character.player) ? 0 + character.accuracy : character.accuracy;
        this["sp-atk"] = (character.player) ? 0 + character["sp-atk"] : character["sp-atk"] ;
        this["sp-def"] = (character.player) ? 0 + character["sp-def"] : character["sp-def"];
        this.xp = character.xp;
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
        return;
    }
    // Kills a player character
    kill(){
        // Sanity check
        if (this.isPlayer()){
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
        let armorValue = Math.round(Math.random*this.def);
        // If we our damage is lower than the armor score, return
        if (damage < armorValue){
            return
        } else {
            this.hp = this.hp - (damage-armorValue);
            return;
        }
    }
};