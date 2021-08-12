// Pass in a player or monster object
// to render the data onto a card.
import './CharacterCard.css';

export default function CharacterCard({character}){
    return(
        <div className="character-card-wrapper">
            <h2>{character.name}</h2>
            <img src={character.img} alt={`${character.name}'s avatar`}/>
            <h3>{character.hp} / {character.maxHP}</h3>
        </div>
    )
}