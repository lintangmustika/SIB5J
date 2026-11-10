// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================
//  Mario memiliki atribut: HP, speed, positionX, positionY, invincible,
//  currentForm. Mario dapat berubah menjadi 3 form: 'mario',
//  'super mario', dan 'fire mario'.
//
//  Default: HP = 1, speed = 5, currentForm = 'mario', invincible = false,
//           positionX = 0, positionY = 0
//
//  1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
//  2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1,
//     dan dapat menembakkan bola api.
//  3. SuperStar (Bintang): Mario kebal terhadap serangan.
//  4. Diserang: HP - 1 dan kembali ke form 'mario'.
//     Jika sedang kebal, serangan tidak berpengaruh.
//  5. Bergerak ke kanan: positionX + speed.
//  6. Bergerak ke kiri: positionX - speed.
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance dan polymorphism.
// =====================================================================

// Kerjakan Quiznya Disini
class Mario {
    HP: number;
    speed: number;
    positionX: number;
    positionY: number;
    invincible: boolean;
    currentForm: "mario" | "super mario" | "fire mario";

    constructor() {
        this.HP = 1;
        this.speed = 5;
        this.positionX = 0;
        this.positionY = 0;
        this.invincible = false;
        this.currentForm = "mario";
    }

    bergerakKanan() {
        this.positionX += this.speed;
        return `Mario bergerak ke kanan. Posisi X: ${this.positionX}`;
    }

    bergerakKiri() {
        this.positionX -= this.speed;
        return `Mario bergerak ke kiri. Posisi X: ${this.positionX}`;
    }

    diserang() {
        if (this.invincible) {
            return "Mario kebal terhadap serangan!";
        }

        this.HP -= 1;
        this.currentForm = "mario";

        if (this.HP < 0) {
            this.HP = 0;
        }

        return `Mario diserang! HP: ${this.HP}`;
    }
}

class Item {
    gunakan(mario: Mario) {
        return "Item digunakan";
    }
}

class SuperMushroom extends Item {
    override gunakan(mario: Mario) {
        mario.HP += 1;
        mario.currentForm = "super mario";

        return `Mario berubah menjadi Super Mario dan hp mario menjadi ${mario.HP}`;
    }
}

class FireFlower extends Item {
    override gunakan(mario: Mario) {
        mario.HP += 1;
        mario.currentForm = "fire mario";

        return `Mario berubah menjadi Fire Mario dan hp mario menjadi ${mario.HP} dan mario dapat menembakkan bola api!`;
    }
}

class SuperStar extends Item {
    override gunakan(mario: Mario) {
        mario.invincible = true;

        return "Mario sekarang kebal terhadap serangan!";
    }
}

const mario = new Mario();
const jamur = new SuperMushroom();
const bunga = new FireFlower();
const bintang = new SuperStar();

console.log(jamur.gunakan(mario));
console.log(bunga.gunakan(mario));
console.log(bintang.gunakan(mario));
console.log(mario.bergerakKanan());
console.log(mario.bergerakKiri());
console.log(mario.diserang());
