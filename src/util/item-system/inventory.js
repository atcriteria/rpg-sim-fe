/* 

Inventories are their own class that we can call
methods on in order to add items to them, remove
items from them, or render the entire list of 
items from them. Each character object will have
and inventory object associated with it, and 
monster objects will have their inventories
generated when the monster is initialized.

*/

import submitPlayer from "../submitPlayer";

export default class Inventory{
    constructor(inv){
        this.items = (inv) ? inv : {}
    }
    addItemToInventory(player, item){
        let id = item.id;
        if (this.items[id]){
            alert("DUPLICATION ERROR, NOTHING ADDED TO INVENTORY\n\nIf this persists, contact the administrator")
        };
        try {
            this.items[id] = item;
            submitPlayer(player)
            return;
        } catch {
            console.log("an error occurred")
        }
    }
    removeItemFromInventory(player, item){
        let id = item.id;
        if (!this.items[id]){
            alert("MISSING ITEM ERROR\n\nIf this persists, contact the administrator")
        };
        delete this.items[id];
        submitPlayer(player)
        return;
    }

}