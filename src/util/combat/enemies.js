// The master list of monsters
// Organized by level group
// Pass: player level
// Return: list of monsters appropriate
// ..with player level

// Upload images to public/images/monsters/
// Then access with:
// ${origin}/images/monsters/monster-img
const origin = window.location.origin

export default function monsterList(level){
    if (level <=5){
        return weakMonsters
    }
    if (level <= 15){
        return medMonsters
    }
    return weakMonsters
};

let weakMonsters = [
    {
        name: "Caterpillar",
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
        name: "Crab",
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
        name: "Goo",
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

let medMonsters = [
    {
        name: "Strange Goo",
        img: `${origin}/images/monsters/goo_01.png`,
        level: 4,
        hp: 35,
        maxHP: 35,
        atk: 6,
        def: 4,
        "sp-atk": 0,
        "sp-def": 0,
        accuracy: 2,
        xp: 35
    },
    {
        name: "Angry Frog",
        img: `${origin}/images/monsters/frog_08.png`,
        level: 5,
        hp: 40,
        maxHP: 40,
        atk: 8,
        def: 5,
        "sp-atk": 0,
        "sp-def": 0,
        accuracy: 2,
        xp: 40
    },
    {
        name: "Silly Demon",
        img: `${origin}/images/monsters/demon_10.png`,
        level: 6,
        hp: 50,
        maxHP: 50,
        atk: 11,
        def: 5,
        "sp-atk": 0,
        "sp-def": 0,
        accuracy: 2,
        xp: 45
    },
];
