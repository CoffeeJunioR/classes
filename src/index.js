class Character {
    constructor(name, type) {
        const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть мин. 2 символа, макс. 10 символов, тип Строка');
        }

        if (!validTypes.includes(type)) {
            throw new Error(`Типы должны быть такими: ${validTypes.join(', ')}.`);
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defence = 0;
    }
}

class Bowerman extends Character {
    constructor(name) {
        super(name, 'Bowman');
        this.attack = 25;
        this.defence = 25;
    }
}

class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman');
        this.attack = 40;
        this.defence = 10;
    }
}

class Magician extends Character {
    constructor(name) {
        super(name, 'Magician');
        this.attack = 10;
        this.defence = 40;
    }
}

class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon');
        this.attack = 10;
        this.defence = 40;
    }
}

class Undead extends Character {
    constructor(name) {
        super(name, 'Undead');
        this.attack = 25;
        this.defence = 25;
    }
}

class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie');
        this.attack = 40;
        this.defence = 10;
    }
}

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