/*

The main object class for all game objects
and items.

All objects must have certain properties:
- id (a unique value)
- props (a collection of the properties passed in the
    constructor object)

*/

import generateUniqueID from "../generateUniqueID";

export default class GameObject{
    constructor(item){
        this.id = (item.id) ? item.id : generateUniqueID();
        // When importing an object in real time it is wrapped
        // in a parent object, and the properties are located
        // in parentObject.default. If we are creating a 
        // GameObject without dynamically importing, we just
        // need to grab all of their props from the object itself
        this.props = (item.default) ? {...item.default} : {...item};
    }
}