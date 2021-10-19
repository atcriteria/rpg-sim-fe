// the main inventory component rendered
// inside the GameWindow component
import './ScreenInventory.css';

export default function ScreenInventory({player}){
    return(
        <div>
            Inventory Screen
            <p className="monies-p" title={`you have ${player.monies} monies to spend on items`}>💸 {player.monies}</p>
        </div>
    )
}