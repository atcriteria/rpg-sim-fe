import { useEffect, useState } from 'react';
import AvatarSelector from './AvatarSelector';
import validateName from '../util/validateName';
import generateCharacter from '../util/generateCharacter';

const initialStateValues = {
    name: "Player",
    img: "",
    hp: 0,
    sp: 0,
    atk: 0,
    def: 0,
    accuracy: 0,
    "sp-atk": 0,
    "sp-def": 0,
    xp: 0,
    points: 20
}
const basePlayerStats = {
    name: "",
    hp: 20,
    sp: 5,
    atk: 5,
    def: 0,
    accuracy: 0,
    "sp-atk": 0,
    "sp-def": 0,
    xp: 0,
    points: 0
}

export default function CharacterCreator({createCharacter}){
    const [state, setState] = useState(initialStateValues);
    const [isNameValid, setIsNameValid] = useState(false);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setIsNameValid(validateName(state.name))
        if(state.points === 0 && isNameValid){
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [state.points, isNameValid, state.name])


    const handleChange = e => {
        return setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const spendPoints = (e) => {
        e.preventDefault();
        const pts = "points"
        let ptsValue = state.points
        let direction = Number(e.target.value)
        let stat = e.target.name
        let statValue = state[stat]
        // Increment
        if (direction === -1 && ptsValue > 0){
            return setState({
                ...state,
                [stat]: statValue+=1,
                [pts]: ptsValue-=1
            })
        }
        // Decrement
        if (direction === 1 && statValue > 0){
            return setState({
                ...state,
                [stat]: statValue-=1,
                [pts]: ptsValue+=1
            })
        }
    }

    const selectImage = (imagePath) => {
        let img = "img"
        if (imagePath === state.img){
            return
        } else {
            return setState({
                ...state,
                [img]: imagePath
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const character = generateCharacter(state)
         return createCharacter(character)
    } 

    return(
        <div className="character-creator-wrapper">
            <AvatarSelector selectImage={selectImage} />
            <p>Points to spend: {state.points}</p>
            <form onSubmit={handleSubmit} >
                <label>player name: </label>
                <input name="name" type="text" value={state.name} onChange={handleChange} required />
                <div className="stat-setter-container">
                    <h4 className="stat-setter-name">Hit Points</h4>
                    <div className="button-container">
                        <button name="hp" value={-1} onClick={spendPoints} >+</button>
                        <p className="stat-level-container">{state.hp + basePlayerStats.hp}</p>
                        <button name="hp" value={1} onClick={spendPoints} >-</button>
                    </div>
                </div>
                <div className="stat-setter-container">
                    <h4 className="stat-setter-name">Spell Points</h4>
                    <div className="button-container">
                        <button name="sp" value={-1} onClick={spendPoints} >+</button>
                        <p className="stat-level-container">{state.sp + basePlayerStats.sp}</p>
                        <button name="sp" value={1} onClick={spendPoints} >-</button>
                    </div>
                </div>
                <div className="stat-setter-container">
                    <h4 className="stat-setter-name">Attack</h4>
                    <div className="button-container">
                        <button name="atk" value={-1} onClick={spendPoints} >+</button>
                        <p className="stat-level-container">{state.atk + basePlayerStats.atk}</p>
                        <button name="atk" value={1} onClick={spendPoints} >-</button>
                    </div>
                </div>
                <div className="stat-setter-container">
                    <h4 className="stat-setter-name">Defense</h4>
                    <div className="button-container">
                        <button name="def" value={-1} onClick={spendPoints} >+</button>
                        <p className="stat-level-container">{state.def + basePlayerStats.def}</p>
                        <button name="def" value={1} onClick={spendPoints} >-</button>
                    </div>
                </div>
                <div className="stat-setter-container">
                    <h4 className="stat-setter-name">Accuracy</h4>
                    <div className="button-container">
                        <button name="accuracy" value={-1} onClick={spendPoints} >+</button>
                        <p className="stat-level-container">{state.accuracy + basePlayerStats.accuracy}</p>
                        <button name="accuracy" value={1} onClick={spendPoints} >-</button>
                    </div>
                </div>
                <button type="submit" disabled={disabled} >Create Character</button>
            </form>
        </div>
    )
}