import Body from './body';

let mockBody = {
    "head": null,
    "torso": null,
    "legs": null,
    "hands": null,
    "wrist": null,
    "lhand": null,
    "rhand": null,
    "ring": null,
    "amulet": null
}
let emptyObject = {}
let charBody = new Body(emptyObject);

test('intitialize body class', ()=> {
    expect(charBody["head"]).toBeNull();
    expect(charBody["torso"]).toBeNull();
});