export default function XPCounter(props){
    let {currentXP, maxCurrentXP} = props;

    const xpTicker = () => {
        setTimeout(() => {
            for(let i = currentXP; i < maxCurrentXP; i++){
                setTimeout(() => {
                    let xpContainer = document.getElementById("victory-screen-xp-counter")
                    // Error handling in case we close the victory screen before finishing this function
                    if (!xpContainer) {
                        return null
                    }
                    xpContainer.innerText = i+1
                }, 1000)
            }
        }, 500)
    }
    xpTicker()
    return null
}