// the main combat component rendered
// inside the GameWindow component

// import {useState} from 'react';
import CharacterCard from './CharacterCard/CharacterCard';
import monsterFinder from '../util/combat/monsterFinder';

export default function ScreenCombat({player}){

    return(
        <div className="combat-screen-wrapper">
            <CharacterCard character={player} />
            <button onClick={monsterFinder(player)}>Find Monster</button>
        </div>
    )
}