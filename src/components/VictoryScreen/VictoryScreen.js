import './VictoryScreen.css'

export default function VictoryScreen(props){
    const {setShowVictoryScreen} = props;

    const handleClick = e => {
        e.preventDefault()
        setShowVictoryScreen(false)
    }
    return(
        <div className="victory-screen-wrapper">
            <div className="victory-screen-content-wrapper">
                <div className="dialogue-section">
                    This is what you won
                </div>
                <button onClick={handleClick} >Continue</button>
            </div>
        </div>
    )
}