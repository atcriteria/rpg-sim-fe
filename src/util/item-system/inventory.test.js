import Inventory from "./inventory";

const mockInventory = new Inventory();

test('Initialize Inventory', () => {
    expect(mockInventory).toHaveProperty("items", {})
})