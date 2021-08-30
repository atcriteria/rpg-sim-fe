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
        let mon = combatEvent.mon;
        console.log(combatEvent)
        if (!mon.isAlive()){
            return setMonster(null)
        }
        if (combatEvent.playerKilled){
            return setMonster(null)
        }
        return setMonster((mon) => {return new Character(mon)})
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