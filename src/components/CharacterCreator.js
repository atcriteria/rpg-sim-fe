import { useState } from 'react';

const initialValues = {
    name: "Player",
    bonusHP: 0,
    hp: 20,
    atk: 2,
    def: 0,
    accuracy: 0,
    "sp-atk": 0,
    "sp-def": 0,
    xp: 0,
    points: 20
}

export default function CharacterCreator(){
    const [state, setState] = useState(initialValues)

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
            Char creator
            <form>
                <label>player name: </label>
                <input name="name" type="text" value={state.name} onChange={handleChange} required />
            </form>
            <button name="atk" value={-1} onClick={spendPoints} >increase</button>
            {state.atk}
            <button name="atk" value={1} onClick={spendPoints} >decrease</button><br />
            {state.points}
        </div>
    )
}