// This is a helper component for character
// creation that helps players cycle through
// the base images

import playerOne from "../images/players/player_1.png"
import playerTwo from "../images/players/player_2.png"
import playerThree from "../images/players/player_3.png"
import playerFour from "../images/players/player_4.png"
import playerFive from "../images/players/player_5.png"
import playerSix from "../images/players/player_6.png"


export default function AvatarSelector({selectImage}){
    return(
        <div>
            <img className="avatar-selector one" onClick={selectImage} name={playerOne} src={playerOne} alt="Player Portrait" />
            <img className="avatar-selector two" onClick={selectImage} name={playerTwo} src={playerTwo} alt="Player Portrait" />
            <img className="avatar-selector three" onClick={selectImage} name={playerThree} src={playerThree} alt="Player Portrait" />
            <img className="avatar-selector four" onClick={selectImage} name={playerFour} src={playerFour} alt="Player Portrait" />
            <img className="avatar-selector five" onClick={selectImage} name={playerFive} src={playerFive} alt="Player Portrait" />
            <img className="avatar-selector six" onClick={selectImage} name={playerSix} src={playerSix} alt="Player Portrait" />
        </div>
    )
}