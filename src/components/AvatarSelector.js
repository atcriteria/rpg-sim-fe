// This is a helper component for character
// creation that helps players cycle through
// the base images

import {useState} from 'react';
import playerAvatars from '../util/playerAvatars';

const initialValues = {
    imagePosition: 0,
    imagePath: playerAvatars[0]
}

export default function AvatarSelector({selectImage}){
    const [state, setState] = useState(initialValues)

    const handleClick = e => {
        e.preventDefault();
        let direction = e.target.name;
        let len = playerAvatars.length-1;
        if(direction === "left"){
            if(state.imagePosition === 0){
                return setState({
                    imagePosition: len,
                    imagePath: playerAvatars[len]
                });
            }
        } else {

        }
    }
    selectImage(state.imagePath)

    return(
        <div>
            <button onClick={handleClick} name="left" >{`<<`}</button>
            <img className="avatar-selector" name={state.imagePath} src={state.imagePath} alt="Player Portrait" />
            <button onClick={handleClick} name="right" >{`>>`}</button>
        </div>
    )
}