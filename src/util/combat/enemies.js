// The master list of monsters
// Organized by level group
// Pass: player level
// Return: list of monsters appropriate
// ..with player level

// Upload images to public/images/monsters/
// Then access with:
// ${origin}/images/monsters/monster-img
const origin = window.location.origin

let weakMonsters = [
    {
        name: "monster",
        img: `${origin}/images/monsters/caterpillar.png`,
        level: 1,
        hp: 20,
        maxHP: 20,
        atk: 2,
        def: 2,
        "sp-atk": 0,
        "sp-def": 0,
        accuracy: 2,
        xp: 20
    },
    {
        name: "monster2",
        img: `${origin}/images/monsters/crab.png`,
        level: 2,
        hp: 25,
        maxHP: 25,
        atk: 3,
        def: 2,
        "sp-atk": 0,
        "sp-def": 0,
        accuracy: 2,
        xp: 25
    },
    {
        name: "monster3",
        img: `${origin}/images/monsters/goo.png`,
        level: 3,
        hp: 30,
        maxHP: 30,
        atk: 4,
        def: 2,
        "sp-atk": 0,
        "sp-def": 0,
        accuracy: 2,
        xp: 30
    },
];

export default function monsterList(level){
    switch(level){
        case (level<=10):
            return weakMonsters
        default:
            return weakMonsters
    }
};