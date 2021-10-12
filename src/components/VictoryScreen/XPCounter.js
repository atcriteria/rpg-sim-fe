export default function XPCounter(props){
    let {currentXP, maxCurrentXP} = props;

    const xpTicker = () => {
        setTimeout(() => {
            for(let i = currentXP; i < maxCurrentXP; i++){
                let xpContainer = document.getElementById("victory-screen-xp-counter")
                console.log(xpContainer)
            }
        }, 500)
    }
    xpTicker()
    return null
}