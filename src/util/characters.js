// A Character is a living creature in the game space.
// These encompass players as well as monsters and 
// any other creature that can be attacked.

export default class Character {
    constructor(character){
        this.name = character.name;
        this.img = character.img;
        this.level = 1;
        this.hp = 20 + character.hp;
        this.maxHP = 20 + character.hp;
        this.sp = 5 + character.sp;
        this.maxSP = 5+character.sp;
        this.atk = 5 + character.atk;
        this.def = 0 + character.def;
        this.accuracy = 0 + character.accuracy;
        this["sp-atk"] = 0;
        this["sp-def"] = 0;
        this.xp = 0;
    }
};