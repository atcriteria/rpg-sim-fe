// the main inventory component rendered
// inside the GameWindow component

export default function ScreenInventory({player}){
    return(
        <div>
            Inventory Screen
            <p>M: {player.monies}</p>
        </div>
    )
}