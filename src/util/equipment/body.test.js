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

let charBody = new Body({});

test('intitialize body class with empty body constructor', ()=> {
    expect(charBody["head"]).toBeNull();
    expect(charBody["torso"]).toBeNull();
});