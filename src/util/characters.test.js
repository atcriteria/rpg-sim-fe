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
    "sp-atk": 0,
    "sp-def": 0,
    accuracy: 2,
    xp: 20
};
let monster = new Character(mockCharacterData);
let char = null;

test('Create A Character', () => {
    char = new Character(mockCharacterData);
    expect(char).toBeInstanceOf(Character);
});

test('Gain Experience', () => {
    char.gainXP(monster);
    expect(char.xp).toBe(40);
});

test('Save Function Call', async () =>{
    let saveOutput = await char.save();
    expect(saveOutput).toBeTruthy();
});
