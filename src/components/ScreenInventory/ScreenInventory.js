// the main inventory component rendered
// inside the GameWindow component
import './ScreenInventory.css';

export default function ScreenInventory({player}){
    let inv = player.getInventoryItems();

    return(
        <div>
            Inventory Screen
            <p className="monies-p" title={`you have ${player.monies} monies to spend on items`}>💸 {player.monies}</p>
            {
                inv.map((item, ind) => {
                    return (<div key={item.id}>{ind+1} - Name: {item.props.name}, Value: {item.props.value}</div>)
                })
            }
        </div>
    )
}