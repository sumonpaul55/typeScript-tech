// compile time polymorphism
// run time polymorphism
{
    // compile time polymorphism - method overloading
    class Calculator {
        add(x: number, y: number): number {
            return x + y
        }

        add(x: string, y: string): string {
            return x + y
        }
    }

    const calc = new Calculator();
    // console.log(calc.add("sumon ", "paul"))
    // 


    class Person {
        getSleep() {
            console.log("Iam sleeping 8 hours per day")
        }
    }

    class Students extends Person {
        getSleep(): void {
            console.log(`I am sleeping 5 hours`)
        }
    }

    class Developer extends Person {
        getSleep(): void {
            console.log(`I am sleeping 7 hours`)
        }
    }

    const getSleepHour = (param: Person) => {
        param.getSleep()
    }
    const person1 = new Person()
    const studnets = new Students()
    const developer = new Developer()
    getSleepHour(person1)
    getSleepHour(studnets)
    getSleepHour(developer)
}