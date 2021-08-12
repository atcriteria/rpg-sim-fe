// the main combat component rendered
// inside the GameWindow component

// import {useState} from 'react';
import CharacterCard from './CharacterCard';

export default function ScreenCombat({player}){

    return(
        <div className="combat-screen-wrapper">
            <CharacterCard character={player} />
        </div>
    )
}