import GameObject from "./GameObject";
import negativeItem from "./negativeItem";

export default async function createObject(path){
    if (!path){
        return new GameObject(negativeItem)
    }
    try {
        let obj = new GameObject(await import(`../../items/${path}`))
        if (obj.default){
            for (let key in obj.default){
                obj[key] = obj.default[key]
            }
            delete obj.default;
        }
        return obj
    }
    catch {
        return new GameObject(negativeItem)
    }
}