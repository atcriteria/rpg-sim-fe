import createObject from "./createObject";
import GameObject from "./GameObject";

test('Object isInstanceOf GameObject Class', async () => {
    const item = await createObject()
    expect(item).toBeInstanceOf(GameObject)
})