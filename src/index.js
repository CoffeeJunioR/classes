class Character {
constructor(name, type, health, level, attack, defence) {
    this.name;
    this.type;
    this.health = 100;
    this.level = 1;
    this.attack;
    this.defence;
}
}

function makeCharacter(name, type, attack, defence) {
    let character = 0;
    if ((typeof name != String) && (name.length < 2) && (name.length > 10)) {
        throw new Error('Нужна строка, мин - 2 символа, макс - 10 символов')
    } else if ((type !== 'Bowman' ) && (type !== 'Swordsman' ) && (type !== 'Magician' ) && (type !== 'Undead' ) && (type !== 'Zombie' ) ) {
        throw new Error('type - один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie')
    }

    character = new Character(name, type, attack, defence)
}