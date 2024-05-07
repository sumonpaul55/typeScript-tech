// Learning function
// Normal function
// arrow function

function add(num1: number, num2: number): number {
    return num1 + num2
}
add(2, "2")

const addAroow = (num1: number, num2: number = 10): number => num1 + num2

// object --> function --> method

const poorUser = {
    name: "sumon",
    balance: 0,
    addBalance(balance: number): string {
        return `My new balance is ${this.balance + balance}`
    }
}
// array
const arr: number[] = [2, 4, 5, 3, 3]
const result: number[] = arr.map((elem: number): number => elem * elem)

console.log(result)