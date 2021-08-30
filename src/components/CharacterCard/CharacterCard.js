// Pass in a player or monster object
// to render the data onto a card.
import './CharacterCard.css';

export default function CharacterCard({character}){
    
    return(
        <div className="character-card-wrapper">
            <h2>{character.name}</h2>
            <img src={character.img} alt={`${character.name}'s avatar`}/>
            <h3>Level: {character.level}</h3>
            <span className="char-card-span">
                <h3>❤️ {character.hp} / {character.maxHP}</h3>
                {/* In case we pass a monster (they don't have SP, so don't show it) */}
                {(character.player) ? <h3>🪄 {character.sp} / {character.maxSP}</h3> : ""}
            </span>
            <span className="char-card-span">
                <h3>⚔️ {character.atk}</h3>
                <h3>🛡️ {character.def}</h3>
            </span>
            <span className="char-card-span">
                {(character.player) ?
                    <h3>🔖 {character.xp} / {character.tnl}</h3> :
                    <h3>🔖 {character.xp}</h3>
                }
            </span>
        </div>
    )
}