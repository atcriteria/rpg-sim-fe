import './DefeatScreen.css';

export default function DefeatScreen(props){
    const {setShowDefeatScreen, combatData} = props;

    const handleClick = e => {
        e.preventDefault()
        setShowDefeatScreen(false)
    }
    console.log(combatData)

    return(
        <div className="victory-screen-wrapper">
            <div className="victory-screen-content-wrapper">
                <div className="dialogue-section">
                    <p>You were defeated by the {combatData.mon.name}!</p>
                    <p>You lost {combatData.totalXPLost} XP</p>
                </div>
                <button onClick={handleClick} >Continue</button>
            </div>
        </div>
    )
}