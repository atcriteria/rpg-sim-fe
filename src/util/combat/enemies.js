// The master list of monsters
// Organized by level group
// Pass: player level
// Return: list of monsters appropriate
// ..with player level

let weakMonsters = [
    {
        name: "monster",
        img: "image/path/here",
        hp: 20,
        atk: 2,
        def: 2,
        "sp-atk": 0,
        "sp-def": 0,
        accuracy: 2,
        xp: 20
    },
    {
        name: "monster2",
        img: "image/path/here",
        hp: 20,
        atk: 2,
        def: 2,
        "sp-atk": 0,
        "sp-def": 0,
        accuracy: 2,
        xp: 20
    },
    {
        name: "monster3",
        img: "image/path/here",
        hp: 20,
        atk: 2,
        def: 2,
        "sp-atk": 0,
        "sp-def": 0,
        accuracy: 2,
        xp: 20
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