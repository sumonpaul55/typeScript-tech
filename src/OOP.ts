// Encapsulation
// 
{
    //
    //parent call
    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age
        }

        sound(): void {
            console.log("Animal has sound")
        }
    }
    //


    //subclass / child class
    class Dog extends Animal {
        color: string;
        constructor(name: string, age: number, color: string) {
            super(name, age);
            this.color = color
        }

        sound(): void {
            console.log("Dog can make sound")
        }
    }


    const dog = new Dog("buddy", 5, "white")
    // console.log(dog.name)

    // type guard of OOP

    // instance of guard

    class Animal1 {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("I am making sound", "hi")
        }
    }

    //subclass / child class
    class Dog2 extends Animal1 {

        constructor(name: string, species: string) {
            super(name, species);

        }

        makeGhew() {
            console.log("Dog can make sound")
        }
    }

    const getAnimal = (animal: Animal1) => {
        if (animal instanceof Dog2) {
            animal.makeGhew()
        }
        else {
            animal.makeSound();
        }

    }

    const dogs = new Dog2("dog", "nothing")

    console.log(getAnimal(dogs))


}