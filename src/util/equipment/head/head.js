/*
Base class for Head, or helmet types of armor.
*/

export default class Head{
    constructor(item){
        this.type = "head";
        this.wc = item.wc;
        this.value = item.value;
    }
}