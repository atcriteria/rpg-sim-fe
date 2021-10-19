// The main menu displayed in the
// GameWindow component.
import './Menu.css';
import createObject from '../../util/item-system/createObject';

export default function Menu({updateScreen}){

    const handleClick = e => {
        e.preventDefault();
        updateScreen(e.target.name)
    }

    const handleDeletePlayer = e => {
        e.preventDefault();
        window.localStorage.removeItem("player")
        window.location.reload();
    }

    const testObjectsButton = async e => {
        e.preventDefault();
        let item = await createObject("food/apple.js")
        console.log(item)
    }

    return(
        <div>
            <nav className="main-menu-nav">
                <button className="menu-nav-button" name="combat" onClick={handleClick} >Battle</button>
                <button className="menu-nav-button" name="inventory" onClick={handleClick} >Inventory</button>
                <button className="menu-nav-button" >Button</button>
                <button className="menu-nav-button" onClick={testObjectsButton} >Test Objects</button>
                <button className="menu-nav-button" name="delete-player" onClick={handleDeletePlayer} >Delete Player</button>
            </nav>
        </div>
    )
}