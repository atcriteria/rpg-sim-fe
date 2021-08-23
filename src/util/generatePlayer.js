// A helper function for generating a character
// by combining the submitting information with
// the base character information. The base info
// may change later and become more complex so
// we're offloading this here
import Character from './characters';

export default function generatePlayer(char){
    return new Character(char)
}