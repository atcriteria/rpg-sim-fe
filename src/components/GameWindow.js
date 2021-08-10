// The main component that we render to serve the game.
// This component will house most of the sub-components
// that players will interact with.

import Menu from './Menu';

export default function GameWindow(){
    return(
        <div className="game-window-wrapper" >
            <Menu />
        </div>
    )
}