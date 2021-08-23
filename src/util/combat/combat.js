// The main function that handles combat

// Pass: Player and Monster objects
// Return: Nothing
// Highest level monster goes first --
// If they're the same, player goes first

export default function combat(player, monster){
    let plevel = player.level;
    let mlevel = monster.level;

    // If player is higher level, they go first
    if (plevel >= mlevel){
        let patk = player.atk
        monster.takeDamage(patk)
        // If we killed the monster
        if(!monster.isAlive()){
            player.gainXP(monster);
        }
        let matk = monster.atk;
        player.takeDamage(matk);
        // If the player died
        if(!player.isAlive()){
            player.kill();
        }
    } else {

    }
}