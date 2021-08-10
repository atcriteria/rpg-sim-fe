// The main component that we render to serve the game.
// This component will house most of the sub-components
// that players will interact with.

import Menu from './Menu';
import {useState} from 'react';
import ScreenCombat from './ScreenCombat';
import ScreenInventory from './ScreenInventory'

export default function GameWindow(){
    const [window, setWindow] = useState("inventory")
    const getScreen = () => {
        switch(window){
        case "combat":
            return <ScreenCombat />
        case "inventory":
            return <ScreenInventory />
        default:
        }
    }
    return(
        <div className="game-window-wrapper" >
            <Menu />
            {
                getScreen()
            }
        </div>
    )
}