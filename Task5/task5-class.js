class Animal {
    constructor(name) {
        this.name = name;
    }

    Eat() {
        var eat = "I can eat!";
        return eat;
    }

    Run() {
        var run = "I can run!";
        return run;
    }

    MyNameIs(name) {
        var myNameIs = "My name is " + name;
        return myNameIs;
    }
}

class Cat extends Animal {
    Meow() {
        var meow = "I can meow!";
        return meow;
    }
}