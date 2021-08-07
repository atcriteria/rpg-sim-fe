// helper function to validate a
// players name during creation

export default function validateName(name){
    if(name.length <=3){
        return false
    }
    if(!name){
        return false
    }
    return true
}