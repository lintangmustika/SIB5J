class npc {
    name: string;
    health: number;
    speed: number;
    attack: number;
    defense: number;
    npcType: "walk" | "fly";

    constructor(
        name: string,
        health: number,
        speed: number,
        attack: number,
        defense: number,
        npcType: "walk" | "fly"
    ) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.attack = attack;
        this.defense = defense;
        this.npcType = npcType;
    }

    walking() {
    this.speed += 2;
    console.log(
        `${this.name} is walking with speed ${this.speed}`,
    );
    }

    sprint() {
    this.speed += 4;
    console.log(
        `${this.name} is sprint with speed ${this.speed}`,
    );
    }

    attacking() {
        this.attack += 2;
        console.log(`${this.name} is attacking with attack ${this.attack}`)
    }

    getattacked(damage : number) {
        this.health -= damage;
        console.log(`${this.name} is attacked and has health ${this.health}`)
    }

    getbuff() {
        this.attack += this.attack * 0.1
        this.health += this.health * 0.05
        console.log(`${this.name} is get buff and has health ${this.health} + attack ${this.attack}`)
    }

    getultimate() {
        this.health -= this.health * 0.5
        this.attack = this.attack * 2 
        this.speed = this.speed * 2 
        console.log(`${this.name} is get ultimate. has health ${this.health} and speed ${this.speed} + attack ${this.attack}`)
    }
}


const mermaid = new npc(
    "zhara",
    200,
    10,
    20,
    5,
    "walk"
)

mermaid.getultimate()
