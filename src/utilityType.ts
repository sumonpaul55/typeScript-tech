{
    type Person = {
        name: string;
        id: number;
        age: number
    }
    const data1: Partial<Person> = {
        name: "sumon",
        id: 45,
        age: 49
    }

    const data2: Required<Person> = {
        name: "sumon",
        id: 45,
        age: 49
    }
    type OmitType = Omit<Person, "address" | "age">

    const pickType: Pick<Person, "name" | "age"> = {
        name: "sumon",
        // id: 45,
        age: 49
    }

    type ReadOnlytype = Readonly<Person>

    // record type
    type MyObj = Record<number, string>
    const dataof: MyObj = {
        34: "34",

    }

}