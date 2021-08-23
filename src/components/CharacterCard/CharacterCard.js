// Pass in a player or monster object
// to render the data onto a card.
import './CharacterCard.css';
import { useState } from 'react';

export default function CharacterCard({character}){
    const [state, setState] = useState(character)
    
    return(
        <div className="character-card-wrapper">
            <h2>{state.name}</h2>
            <img src={state.img} alt={`${state.name}'s avatar`}/>
            <h3>Level: {state.level}</h3>
            <h3>HP: {state.hp} / {state.maxHP}</h3>
            {/* In case we pass a monster (they don't have SP, so don't show it) */}
            {(state.player) ? <h3>SP: {state.sp} / {state.maxSP}</h3> : ""}
            <h3>Attack: {state.atk}</h3>
            <h3>Defense: {state.def}</h3>
        </div>
    )
}