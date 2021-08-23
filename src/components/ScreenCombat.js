// the main combat component rendered
// inside the GameWindow component

// import {useState} from 'react';
import CharacterCard from './CharacterCard/CharacterCard';
import monsterFinder from '../util/combat/monsterFinder';
import { useState } from 'react';

export default function ScreenCombat({player}){
    const [monster, setMonster] = useState(null)

    const findMonster = e => {
        e.preventDefault();
        let mon = monsterFinder(player)
        setMonster(mon)
    }
    const handleAttack = e => {
        e.preventDefault();
    }

    return(
        <div className="combat-screen-wrapper">
            <div className="character-wrapper">
                <CharacterCard character={player} />
                {
                    (!monster) ? "" :
                    <CharacterCard character={monster} />
                }
            </div>
            {
                (!monster) ?
                <button onClick={findMonster}>Find Monster</button> :
                <button onClick={handleAttack}>Attack!</button>
            }
        </div>
    )
}