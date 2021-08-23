// this is a helper function for submitting
// a created character. When I scale the app
// up a bit this function may have to do calls
// and access more information that I don't want
// cluttering up the main App file.

// Takes in a character and if it is a valid character
// then we stringify it and store it in local storage
// and return true, otherwise we return false. In the
// future this will likely make an API call so users
// cannot easily hack their characters.
export default function submitPlayer(player){
    if(player){
        window.localStorage.setItem("player", JSON.stringify(player))
        return true
    } else {
        return false
    }
}