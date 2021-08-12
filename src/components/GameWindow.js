// The main component that we render to serve the game.
// This component will house most of the sub-components
// that players will interact with.

import Menu from './Menu';
import {useState} from 'react';
import ScreenCombat from './ScreenCombat';
import ScreenInventory from './ScreenInventory'

export default function GameWindow({player}){
    const [window, setWindow] = useState("inventory")
    const getScreen = () => {
        switch(window){
        case "combat":
            return <ScreenCombat player={player} />
        case "inventory":
            return <ScreenInventory />
        default:
        }
    }
    const updateScreen = (screen) => {
        return setWindow(screen)
    }
    return(
        <div className="game-window-wrapper" >
            <Menu updateScreen={updateScreen} />
            {
                getScreen()
            }
        </div>
    )
}