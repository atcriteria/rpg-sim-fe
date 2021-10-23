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
        this.props = (item.default) ? {...item.default} : {...item};
    }
}