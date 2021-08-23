// the main combat component rendered
// inside the GameWindow component

// import {useState} from 'react';
import CharacterCard from './CharacterCard/CharacterCard';
import monsterFinder from '../util/combat/monsterFinder';
import combat from '../util/combat/combat';
import { useState, useEffect } from 'react';

export default function ScreenCombat({player}){
    const [monster, setMonster] = useState(null)
    console.log("bleghh")
    useEffect(() => {
        console.log(monster)
    }, [monster])

    const findMonster = e => {
        e.preventDefault();
        console.log(player)
        let mon = monsterFinder(player)
        setMonster(mon)
    }
    const handleAttack = e => {
        e.preventDefault();
        const combatEvent = combat(player, monster);
        console.log(combatEvent)
        if (!combatEvent.isAlive()){
            console.log("It isnt alive...")
            return setMonster(null)
        }
        return setMonster(combatEvent)
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