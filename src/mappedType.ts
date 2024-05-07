{
    type Person = {
        name: string;
        id: number;
        age: number

    }

    // name | id | age
    type PersonReadonly = { readonly [key in keyof Person]: Person[key] | null };

    type Person2 = {
        [key in keyof Person]: Person[key]
    }
    const ami: Person2 = {
        name: "50",
        id: 490,
        age: 4
    }

    // Omit, Required, Pick, partial = optional
    type newType = Omit<Person, "name" | "age">
    type pertial = Partial<Person>

}