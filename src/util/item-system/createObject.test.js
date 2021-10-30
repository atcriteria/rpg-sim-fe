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
    expect(item).toHaveProperty('name', 'apple');
    expect(item).toHaveProperty('value', 2);
})