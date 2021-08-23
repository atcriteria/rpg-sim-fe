// A helper function for generating a character
// by combining the submitting information with
// the base character information. The base info
// may change later and become more complex so
// we're offloading this here

class Character {
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

export default function generateCharacter(character){
    const char = new Character(character)
    return char
}