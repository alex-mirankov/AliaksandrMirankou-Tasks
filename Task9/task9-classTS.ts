class Animal {
    private _name: String;
    private _eat: String = "I can eat!";
    private _run: String = "I can run!";
    private _myNameIs: String = "My name is " + this._name;
    constructor(animalName: String) {
        this._name = animalName;
    }

    Eat() {
        return this._eat;
    }

    Run() {
        return this._run;
    }

    MyNameIs() {
        return this._myNameIs;
    }
}

class Cat extends Animal {
    private _meow: String = "I can meow!";
    Meow() {
        return this._meow;
    }
}