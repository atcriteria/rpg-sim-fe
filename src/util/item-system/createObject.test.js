import createObject from "./createObject";
import GameObject from "./GameObject";

test('Object isInstanceOf GameObject Class', async () => {
    const item = await createObject();
    expect(item).toBeInstanceOf(GameObject)
})

test('Defaults To Negative Item', async () => {
    const item = await createObject();
    expect(item).toHaveProperty('name','Negative Item');
})

test('Item Created Is Expected Item', async () => {
    const item = await createObject('food/apple.js');
    const headArmor = await createObject('armors/head/cloth_hat.js');
    expect(item).toHaveProperty('name', 'apple');
    expect(item).toHaveProperty('value', 2);
    expect(headArmor).toHaveProperty('ac', 1);
})