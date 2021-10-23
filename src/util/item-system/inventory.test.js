import Inventory from "./inventory";

const mockInventory = new Inventory();
const player = {}
const testItem = {id: 1, name: "test-item"}

test('Initialize Inventory', () => {
    expect(mockInventory).toHaveProperty("items", {});
});

test('Create Inventory For Player', () => {
    expect(player).not.toHaveProperty("inv");
    player.inventory = new Inventory();
    expect(player.inventory).toBeInstanceOf(Inventory);
});

test('Add Item To Player Inventory', () => {
    let inv = player.inventory;
    inv.addItemToInventory(player, testItem);
    expect(inv.items[1]).toHaveProperty("name", "test-item");
})