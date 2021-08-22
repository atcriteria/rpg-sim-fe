// the main combat component rendered
// inside the GameWindow component

// import {useState} from 'react';
import CharacterCard from './CharacterCard/CharacterCard';
import monsterFinder from '../util/combat/monsterFinder';

export default function ScreenCombat({player}){

    const findMonster = e => {
        e.preventDefault();
        monsterFinder(player)
    }

    return(
        <div className="combat-screen-wrapper">
            <CharacterCard character={player} />
            <button onClick={findMonster}>Find Monster</button>
        </div>
    )
}