// The main menu displayed in the
// GameWindow component.
import './Menu.css';
import apple from '../../util/inventory/listOfObjects';
import GameObject from '../../util/inventory/GameObject';

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

    const testObjectsButton = e => {
        e.preventDefault();
        let item = new GameObject(apple)
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