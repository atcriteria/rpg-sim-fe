// A helper function for generating a character
// by combining the submitting information with
// the base character information. The base info
// may change later and become more complex so
// we're offloading this here

export default function generateCharacter(character){
    const newCharacter = {
        name: character.name,
        img: character.img,
        level: 1,
        hp: 20 + character.hp,
        maxHP: 20 + character.hp,
        sp: 5 + character.sp,
        maxSP: 5+character.sp,
        atk: 5 + character.atk,
        def: 0 + character.def,
        accuracy: 0 + character.accuracy,
        "sp-atk": 0,
        "sp-def": 0,
        xp: 0,
    }
    return newCharacter
}