/* 

Inventories are their own class that we can call
methods on in order to add items to them, remove
items from them, or render the entire list of 
items from them. Each character object will have
and inventory object associated with it, and 
monster objects will have their inventories
generated when the monster is initialized.

*/

export default class Inventory{
    constructor(inv){
        this.inventory = (inv) ? inv.inventory : {}
    }
    
}