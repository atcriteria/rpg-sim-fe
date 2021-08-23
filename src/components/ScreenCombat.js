// the main combat component rendered
// inside the GameWindow component

// import {useState} from 'react';
import CharacterCard from './CharacterCard/CharacterCard';
import monsterFinder from '../util/combat/monsterFinder';
import combat from '../util/combat/combat';
import { useState } from 'react';

export default function ScreenCombat({player}){
    const [monster, setMonster] = useState(null)
    const [playerChar, setPlayerChar] = useState(player)

    const findMonster = e => {
        e.preventDefault();
        let mon = monsterFinder(playerChar)
        console.log(mon)
        console.log(playerChar)
        setMonster(mon)
    }
    const handleAttack = e => {
        e.preventDefault();
        combat(player, monster);
    }

    return(
        <div className="combat-screen-wrapper">
            <div className="character-wrapper">
                <CharacterCard character={playerChar} />
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