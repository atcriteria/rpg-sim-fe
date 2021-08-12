// This is a helper component for character
// creation that helps players cycle through
// the base images

import {useState, useEffect} from 'react';
import playerAvatars from '../../util/playerAvatars';
import './AvatarSelector.css';

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
            let newPosition = (state.imagePosition-1)
            if(state.imagePosition === 0){
                return setState({
                    imagePosition: len,
                    imagePath: playerAvatars[len]
                });
            } else {
                return setState({
                    imagePosition: newPosition,
                    imagePath: playerAvatars[newPosition]
                })
            }
        } else {
            let newPosition = (state.imagePosition+1);
            if(state.imagePosition === len){
                return setState({
                    imagePosition: 0,
                    imagePath: playerAvatars[0]
                })
            } else {
                return setState({
                    imagePosition: newPosition,
                    imagePath: playerAvatars[newPosition]
                })
            }
        }
    }
    
    useEffect(()=> {
        selectImage(state.imagePath)
    }, [selectImage, state.imagePath])

    return(
        <div className="avatar-selector-main-wrapper">
            <div className="avatar-selector-wrapper">
                <button onClick={handleClick} name="left" >{`<<`}</button>
                <img className="avatar-selector" name={state.imagePath} src={state.imagePath} alt="Player Portrait" />
                <button onClick={handleClick} name="right" >{`>>`}</button>
            </div>
            <p>Avatar-{state.imagePosition+1}</p>
        </div>
    )
}