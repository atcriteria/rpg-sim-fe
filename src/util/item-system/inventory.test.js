import Inventory from "./inventory";

const mockInventory = new Inventory();
const player = {}

test('Initialize Inventory', () => {
    expect(mockInventory).toHaveProperty("items", {});
});

test('Create Inventory For Player', () => {
    expect(player).not.toHaveProperty("inv");
    player.inventory = new Inventory();
    expect(player.inventory).toBeInstanceOf(Inventory);
});