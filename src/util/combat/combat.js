// The main function that handles combat

// Pass: Player and Monster objects
// Return: Nothing
// Highest level monster goes first --
// If they're the same, player goes first

export default function combat(player, monster){
    let p = player;
    let mon = monster;
    let patk = player.atk
    let matk = mon.atk;

    let monDamageTaken = mon.takeDamage(patk)
    // If we killed the monster
    if(!mon.isAlive()){
        p.gainXP(mon);
        return {mon, monDamageTaken}
    }
    let playerDamageTaken = p.takeDamage(matk);
    // If the player died
    if(!p.isAlive()){
        p.kill();
    }
    p.save();
    return {mon, monDamageTaken, playerDamageTaken}
}