import GameObject from "./GameObject";
import negativeItem from "./negativeItem";

export default function createObject(path){
    if (!path){
        return new GameObject(negativeItem)
    }
    try {
        let obj = new GameObject(import(`../../items/${path}`))
        return obj
    }
    catch {
        return new GameObject(negativeItem)
    }
}