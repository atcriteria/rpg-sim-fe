// This is a helper component for character
// creation that helps players cycle through
// the base images

import {useState} from 'react';
import playerAvatars from '../util/playerAvatars';

export default function AvatarSelector({selectImage}){
    const [state, setState] = useState(playerAvatars[0]);

    const handleClick = e => {
        e.preventDefault();
        selectImage(state)
    }

    return(
        <div>
            <button onClick={handleClick} name="left" >{`<<`}</button>
            <img className="avatar-selector" name={state} src={state} alt="Player Portrait" />
            <button onClick={handleClick} name="right" >{`>>`}</button>
        </div>
    )
}