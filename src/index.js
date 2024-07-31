import Bowerman from "./heroes/Bowerman.js";
import Daemon from "./heroes/daemon.js";
import Magician from "./heroes/magician.js";
import Swordsman from "./heroes/swordsman.js";
import Undead from "./heroes/undead.js";
import Zombie from "./heroes/zombie.js";

try {
    const bowman = new Bowerman('Legolas');
    console.log(bowman);

    const swordsman = new Swordsman('Aragorn');
    console.log(swordsman);

    const magician = new Magician('Gandalf');
    console.log(magician);

    const daemon = new Daemon('Azazel');
    console.log(daemon);

    const undead = new Undead('Voldemort');
    console.log(undead);

    const zombie = new Zombie('ZombieMan');
    console.log(zombie);

    const invalidCharacter = new Bowerman('L');
} catch (error) {
    console.error(error.message);
}