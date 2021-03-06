// The main component that we render to serve the game.
// This component will house most of the sub-components
// that players will interact with.

import Menu from './Menu/Menu';
import {useState} from 'react';
import ScreenCombat from './ScreenCombat';
import ScreenInventory from './ScreenInventory/ScreenInventory'

export default function GameWindow({player}){
    const [window, setWindow] = useState("inventory")
    const getScreen = () => {
        switch(window){
        case "combat":
            return <ScreenCombat player={player} />
        case "inventory":
            return <ScreenInventory player={player} />
        default:
        }
    }
    const updateScreen = (screen) => {
        return setWindow(screen)
    }
    return(
        <div className="game-window-wrapper" >
            <Menu player={player} updateScreen={updateScreen} />
            {
                getScreen()
            }
        </div>
    )
}