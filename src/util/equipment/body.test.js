import Body from './body';
import Head from './head/head';
import clothHat from '../../items/armors/head/cloth_hat';

let testHelmet = new Head(clothHat);
let charBody = new Body({});

test('intitialize body class with empty body constructor', () => {
    expect(charBody["head"]).toBeNull();
    expect(charBody["torso"]).toBeNull();
});

test('Can wear a helmet', () => {
    charBody.wear(testHelmet)
    expect(charBody["head"]).toHaveProperty("type", "head");
})