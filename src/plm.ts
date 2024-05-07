// 12. Create a function that takes an input parameter of tye unknown. Inside the function , implement tye guards to check if the
//  input is of type string or number and perform different operations based on the type

// function processInput(input: unknown) {
//     if (typeof input === "string") {
//         console.log("string")
//     }
//     else if (typeof input === "number") {
//         console.log("number")
//     }
//     else {
//         console.log("unknown type")
//     }
// }

// processInput("54")

//5. create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create,
// Update, and delete . Dfine the types for the methods and "create a class that impelement this interface"


interface Repository<T> {
    getAll(): T[];
    getById(id: number): T | undefined;
    create(items: T): void;
    update(items: T): void;
    delete(id: number): void
}

class GenericRepository<T extends { id: number }> implements Repository<T> {
    private items: T[]
    constructor() {
        this.items = []
    }
    create(items: T): void {
        this.items.push(items)
    }
    getAll() {
        return this.items;
    }
    getById(id: number): T | undefined {
        return this.items.find((item: T) => item.id === id)
    }

    // delete
    delete(id: number) {
        const index = this.items.findIndex((item: T) => item.id === id)
        if (index !== -1) {
            this.items.pop(index)
        }
    }

}