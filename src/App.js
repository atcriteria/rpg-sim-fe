import './App.css';
import {useState} from 'react';
import PlayerCreator from './components/PlayerCreator';
import GameWindow from './components/GameWindow';
import Character from './util/characters';

import submitPlayer from './util/submitPlayer';

let localPlayer = JSON.parse(window.localStorage.getItem("player")) || false
const initialValues = {
  player: (localPlayer) ? new Character(localPlayer) : localPlayer
}

function App() {
  const [state, setState] = useState(initialValues)

  const createCharacter = (player) => {
    const isValidCharacter = submitPlayer(player);
    if (isValidCharacter){
      window.localStorage.setItem("player", JSON.stringify(player))
      const p = "player";
      return setState({
        ...state,
        [p]: player
      })
    } else {
      return alert("There was an error in submitting your character\nPlease try again")
    }
  }

  return (
    <div className="App">
      the app
      {(!state.player) ? <PlayerCreator createCharacter={createCharacter} /> : <GameWindow player={state.player}/>}
    </div>
  );
}

export default App;
