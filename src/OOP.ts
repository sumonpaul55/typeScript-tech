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
    console.log(dog.name)
}