import createObject from "./createObject";
import GameObject from "./GameObject";

test('Object isInstanceOf GameObject Class', async () => {
    const item = await createObject();
    expect(item).toBeInstanceOf(GameObject)
})

test('Defaults To Negative Item', async () => {
    const item = await createObject();
    // Use dot notation with the path to the desired prop
    // Expected object {id: 000000, props: {name: "Negative Item"}}
    // The following is the same as item.props.name
    expect(item).toHaveProperty('props.name','Negative Item');
})

test('Item Created Is Expected Item', async () => {
    const item = await createObject('food/apple.js');
    expect(item).toHaveProperty('props.name', 'apple');
    expect(item).toHaveProperty('props.value', 2);
})