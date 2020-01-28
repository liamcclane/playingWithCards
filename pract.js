var MyObjConstructor = function (name) {
    var myPrivateVar = "Hello"; // just to show that it is difficult to see this private var
    this.name = name; // but you can see the name!
    this.method = function () {
        console.log("I am a method");
        console.log("My name is ", this.name);
    };
}
var obj1 = new MyObjConstructor('object1');
var obj2 = new MyObjConstructor('object2');
console.log(obj1);


obj1.newProperty = "newProperty!";
obj1.__proto__.anotherProperty = "anotherProperty!"; // technacally bad practice
console.log(obj1.anotherProperty); // anotherProperty!
console.log(obj1.newProperty); // newProperty!
// What about obj2?
console.log(obj2.newProperty); // undefined
console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!

// After we create our MyObjConstructor:
MyObjConstructor.prototype.methodName = function () {
    //do stuff here!
}


function Cat(catName) {
    var name = catName;
    this.getName = function () {
        return name;
    };
    this.greet = function (){
        console.log("I am a cat, my name is ",  this.getName());
        return this
    }
}
//adding a method to the cat prototype
Cat.prototype.sayHi = function () {
    console.log('meow');
};
//adding properties to the cat prototype
Cat.prototype.numLegs = 4;
var muffin = new Cat('muffin');
var biscuit = new Cat('biscuit');
console.log(muffin, biscuit);
//we access prototype properties the same way as we would access 'own' properties
muffin.sayHi();
biscuit.sayHi();
console.log(muffin.numLegs);
// we may change an instance's attributes rather than keeping the value set by prototype
muffin.numLegs = 3;
  // poor mutant cats: muffin.__proto__.numLegs ++;
  // doing this to muffin will cause all the cats to have 5 legs, but muffin will still have 3 legs
