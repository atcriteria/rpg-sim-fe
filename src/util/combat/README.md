## Combat-System

This is still a work in process but the idea so far is like so:

- There will be two 'types' of attacks, Melee and Spells
- Ranged (bow&arrow) will count as Melee

When the player chooses an attack it will, based on the type of attack, create an Attack object

Attack Objects:
- Pass in the player object and mechanism of attack
- Determine the amount of damage based on the passed params
- Return an object containing the damage value and mechanism of attack

The we create the Damage Event

Damage Events:
- Pass in the Attack Object and monster object
- 