## Combat-System

This is still a work in process but the idea so far is like so:

- There will be two 'types' of attacks, Melee and Spells
- Ranged (bow&arrow) will count as Melee

When the player chooses an attack it will, based on the type of attack, create an Attack object

Attack Objects:
- Pass in the player object and mechanism of attack
- Determine the amount of damage based on the passed params
- Return an object containing the damage value and mechanism of attack

Then we create the Damage Event

Damage Events:
- Pass in the Attack Object and monster object
- Determine the amount of damage to do
- Determine the mechanism of attack
- Based on the mechanism, use either `def` or `sp-def` to determine the reduction in damage
- Return an object containing the amount of damage dealt

Lastly we apply the Damage Event in the main Combat function
- Once the Damage event is returned, apply the damage dealt to the monster or player `hp`
- Do the standard checks to determine if the player or monster died
