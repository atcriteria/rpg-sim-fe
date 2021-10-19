// A helper function that creates and returns unique IDs

export default function generateUniqueID(){
    let id = Math.ceil(Math.random()*37937);
    return id;
}