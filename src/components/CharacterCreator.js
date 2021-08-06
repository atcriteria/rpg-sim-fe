import { useState } from 'react';

const initialStateValues = {
    name: "Player",
    hp: 0,
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
    atk: 5,
    def: 0,
    accuracy: 0,
    "sp-atk": 0,
    "sp-def": 0,
    xp: 0,
    points: 0
}

export default function CharacterCreator(){
    const [state, setState] = useState(initialStateValues)

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

    return(
        <div className="character-creator-wrapper">
            <p>Points to spend: {state.points}</p>
            <form>
                <label>player name: </label>
                <input name="name" type="text" value={state.name} onChange={handleChange} required />
                <div className="stat-setter-container">
                    <h4 className="stat-setter-name">Attack</h4>
                    <div className="button-container">
                        <button name="atk" value={-1} onClick={spendPoints} >+</button>
                        {state.atk + basePlayerStats.atk}
                        <button name="atk" value={1} onClick={spendPoints} >-</button>
                    </div>
                </div>
            </form>
        </div>
    )
}