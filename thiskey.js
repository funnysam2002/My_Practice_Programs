const dog = {
    name:"Bruno",
    breed:"pug",
    color:"black",
    bark(){
        console.log("THIS IS:", this)
        console.log(`${this.name} who is a ${this.color} ${this.breed} says BOW-WOW`);
    }
}

const bark2=dog.bark;