/*

The class that is in charge of handling equipped items for
character objects. 

Weapons are always wielded in the right hand for single-hand
weapons, while two handed weapons always occupy both hands.

Characters may only wear one ring and one amulet at a time.

*/

export default class Body{
    constructor(charBody){
        this.head = charBody.head || null;
        this.torso = charBody.torso || null;
        this.legs = charBody.legs || null;
        this.hands = charBody.hands || null;
        this.wrist = charBody.wrist || null;
        this.lhand = charBody.lhand || null;
        this.rhand = charBody.rhand || null;
        this.ring = charBody.ring || null;
        this.amulet = charBody.amulet || null;
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