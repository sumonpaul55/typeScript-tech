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
    console.log(calc.add("sumon ", "paul"))
}