class Ninja {

    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName = function () {
        console.log("My ninja name is", this.name)
        return this;
    }

    showStats = function () {
        console.log("Name :", this.name, ", Health:", this.health,
            ",Speed:", this.speed, ", Strenght:", this.strength)
        return this
    }

    drinkSake = function () {
        this.health += 10;
        return this
    }

    punch = function (otherNinja) {
        let loss = 5
        console.log(this.name, "was punched by", otherNinja.name,
            "and lost ", loss, "Health points")

        this.health -= loss
        otherNinja.health += loss
        return this
    }

    kick = function (otherNinja) {
        if (otherNinja.constructor != Ninja) {
            console.log("plese pass in Ninja into the parameter")
            return this
        }
        let loss = 15
        console.log(this.name, "was kicked by", otherNinja.name,
            "and lost ", loss, "Health points")
        this.health -= loss
        otherNinja.health += loss
        return this;
    }
}
class Sensei extends Ninja {

    constructor(name){
        super(name);
        this.health = 200
        this.speed =10
        this.strength =10
    }

    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        this.drinkSake();
        return this
    }

}

// var ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// // -> "My ninja name is Hyabusa!"
// ninja1.showStats();
// // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
// console.log("after drinking sake,")
// ninja1.drinkSake().showStats();
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
// redNinja.punch(blueNinja);
// redNinja.showStats()
// blueNinja.showStats()
// redNinja.kick(blueNinja);
// redNinja.showStats()
// blueNinja.showStats()
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
