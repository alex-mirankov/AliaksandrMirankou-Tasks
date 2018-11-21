function Animal(){
    this.eat = "I can eat!";
    this.run = "I can run!";
}

Animal.prototype.Eat = function() {
    return this.eat;
}

Animal.prototype.Run = function() {
    return this.run;
}

function Dog(name) {
    Animal.apply(this, arguments);
    this.bark = "I can bark!"
    this.myName = "My name is " + name;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.MyNameIs = function() {
    return this.myName;
}

Dog.prototype.Bark = function() {
    return this.bark;
}