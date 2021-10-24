import Character from "./characters";

const mockCharacterData = {
    name: "TestChar",
    img: `${origin}/images/monsters/caterpillar.png`,
    test: true,
    player: true,
    level: 1,
    hp: 20,
    maxHP: 20,
    atk: 2,
    def: 2,
    deaths: 0,
    "sp-atk": 0,
    "sp-def": 0,
    accuracy: 2,
    xp: 25
};
let monster = new Character(mockCharacterData);
let char = null;

test('Create A Character', () => {
    char = new Character(mockCharacterData);
    expect(char).toBeInstanceOf(Character);
});

test('Gain Experience', () => {
    char.gainXP(monster);
    expect(char.xp).toBe(50);
});

test('Save Function Call', async () =>{
    let saveOutput = await char.save();
    expect(saveOutput).toBeTruthy();
});

test('Player Leveled Up', async () => {
    await char.levelUp();
    expect(char.level).toBe(2);
});

test('Player died And Lost XP', async () => {
    char.xp = 50;
    await char.kill();
    expect(char.deaths).toBe(1);
    expect(char.xp).toBe(37);
});