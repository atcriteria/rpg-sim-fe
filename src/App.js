import './App.css';
import {useState} from 'react';
import CharacterCreator from './components/CharacterCreator';
import GameWindow from './components/GameWindow';

import submitCharacter from './util/submitCharacter';

let localChar = JSON.parse(window.localStorage.getItem("player")) || false
const initialValues = {
  char: localChar
}

function App() {
  const [state, setState] = useState(initialValues)

  const createCharacter = (character) => {
    const isValidCharacter = submitCharacter(character);
    if (isValidCharacter){
      console.log(character)
      const char = "char";
      return setState({
        ...state,
        [char]: character
      })
    } else {
      return alert("There was an error in submitting your character\nPlease try again")
    }
  }
  console.log(state)

  return (
    <div className="App">
      the app
      {(!state.char) ? <CharacterCreator createCharacter={createCharacter} /> : <GameWindow player={state.char}/>}
    </div>
  );
}

export default App;
