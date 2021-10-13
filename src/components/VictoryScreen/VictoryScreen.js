import './VictoryScreen.css'
import XPCounter from './XPCounter';

export default function VictoryScreen(props){
    const {setShowVictoryScreen, combatData} = props;
    let playerXPBeforeAdding = Math.max(0,(combatData.p.xp - 25));
    let playerXP = combatData.p.xp;

    const handleClick = e => {
        e.preventDefault()
        setShowVictoryScreen(false)
    }

    return(
        <div className="victory-screen-wrapper">
            <div className="victory-screen-content-wrapper">
                <div className="dialogue-section">
                    This is what you won
                    <p>You are awarded {combatData.mon.xp}XP!</p>
                    <p>You are <span id="victory-screen-xp-counter">{playerXPBeforeAdding}</span>/{combatData.p.tnl} from level {combatData.p.level+1}</p>
                </div>
                <button onClick={handleClick} >Continue</button>
            </div>
            <XPCounter currentXP={playerXPBeforeAdding} maxCurrentXP={playerXP} />
        </div>
    )
}