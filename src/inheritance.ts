{
    // oop inheritance

    // parent class
    class Parent {
        name: string;
        age: number;
        address: string
        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
    }

    class Students extends Parent {
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }

        getSleep(sleepTime: number) {
            console.log(`${this.name} is Sleep ${sleepTime} Every Day.`)
        }
    }

    class Teacher extends Parent {
        designation: string;
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)

            this.designation = designation
        }
        getSleep(sleepTime: number) {
            console.log(`${this.name} is Sleep ${sleepTime} Every Day.`)
        }
        takeClass(numofClass: number) {
            console.log(`${this.name} will take ${numofClass}`)
        }
    }



    const student1 = new Students("sumon", 23, "Dhaka")
    const teacher1 = new Teacher("omuk", 23, "Dhaka", "Prinicple")

    console.log(teacher1.getSleep(9))


}