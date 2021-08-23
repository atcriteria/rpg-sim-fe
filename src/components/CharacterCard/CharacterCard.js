// Pass in a player or monster object
// to render the data onto a card.
import './CharacterCard.css';
import { useEffect } from 'react';

export default function CharacterCard({character}){
    console.log("rendered card")
    useEffect(() => {
        console.log("effect triggered")
    }, [character])
    return(
        <div className="character-card-wrapper">
            <h2>{character.name}</h2>
            <img src={character.img} alt={`${character.name}'s avatar`}/>
            <h3>Level: {character.level}</h3>
            <h3>HP: {character.hp} / {character.maxHP}</h3>
            {/* In case we pass a monster (they don't have SP, so don't show it) */}
            {(character.player) ? <h3>SP: {character.sp} / {character.maxSP}</h3> : ""}
            <h3>Attack: {character.atk}</h3>
            <h3>Defense: {character.def}</h3>
        </div>
    )
}