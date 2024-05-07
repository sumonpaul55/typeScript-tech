// destructuring
// name alias -> inside {} when destructuring
// type alias

{
    // type alias


    // condition type using extends
    type CheckString<T> = T extends string ? string : unknown
    type IsString = CheckString<number>


    interface Person {
        name: string;
        age: number
    }

    type hasOwnproperty<T> = T extends keyof Person ? true : false

    type checking = hasOwnproperty<"age">

}
