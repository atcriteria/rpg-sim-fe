/*

The class that is in charge of handling equipped items for
character objects. 

Weapons are always wielded in the right hand for single-hand
weapons, while two handed weapons always occupy both hands.

Characters may only wear one ring and one amulet at a time.

*/

export default class Body{
    constructor(charBody){
        this.head = charBody.head;
        this.torso = charBody.torso;
        this.legs = charBody.legs;
        this.hands = charBody.hands;
        this.wrist = charBody.wrist;
        this.lhand = charBody.lhand;
        this.rhand = charBody.rhand;
        this.ring = charBody.ring;
        this.amulet = charBody.amulet;
    }
    // Wear armors
    wear(item){
        let type = item.type;
        if (type === "shield"){
            if (this.lhand === null){
                this.lhand = item;
                return;
            }
        }
        if (this[type] === null){
            this[type] = item;
            return;
        } else {
            return;
        }
    }
    // Unwear armors
    unwear(item){
        let type = item.type;
        this[type] = null;
        return;
    }
    // Wield weapons
    wield(item){
        let hands = item.hands;
        if (hands === 2){
            if (this.lhand == null && this.rhand == null){
                this.rhand = item;
                this.lhand = item;
                return;
            } else {
                return;
            }
        }
        if (hands === 1){
            if (this.rhand == null){
                this.rhand = item;
                return;
            } else {
                return;
            }
        }
    }
    // Unwield weapons
    unwield(item){
        let hands = item.hands;
        if (hands === 2){
            this.lhand = null;
            this.rhand = null;
            return;
        }
        if (hands === 1){
            this.rhand = null;
            return;
        }
        return;
    }
}