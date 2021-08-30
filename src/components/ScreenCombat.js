// the main combat component rendered
// inside the GameWindow component

// import {useState} from 'react';
import CharacterCard from './CharacterCard/CharacterCard';
import monsterFinder from '../util/combat/monsterFinder';
import combat from '../util/combat/combat';
import Character from '../util/characters';
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
        const combatEvent = combat(player, monster);
        if (!combatEvent.isAlive()){
            return setMonster(null)
        }
        return setMonster((combatEvent) => {return new Character(combatEvent)})
    }

    return(
        <div className="combat-screen-wrapper">
            <div className="character-wrapper">
                <CharacterCard character={player} key={player.name} />
                {
                    (!monster) ? "" :
                    <CharacterCard character={monster} key={monster.name} />
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