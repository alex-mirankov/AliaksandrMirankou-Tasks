function Animal() {
    var eat = "I can eat!";
    var run = "I can run!";

    this.Eat = function() {
        return eat;
    }

    this.Run = function() {
        return run;
    }
}

function Rabbit(name) {
    Animal.call(this);

    var jump = "I can jump!";
    var myNameIs = "Hello! My name is " + name; 

    this.Jump = function(){
        return jump;
    }

    this.Name = function(){
        return myNameIs;
    }
}
