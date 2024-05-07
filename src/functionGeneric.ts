{
    const createArray = (param: string): string[] => {
        return [param]
    }
    const createWithGeneric = <T>(param: T, param2: T): T[] => {
        return [param, param2]
    }
    const res1 = createArray("sumon")
    // const res2 = createWithGeneric<number>(59)
    const res3 = createWithGeneric<{ id: number, name: string }>({ id: 50, name: "sumon" }, { id: 50, name: "sumon" })
    // console.log(res3)



    const createWithGenricTuple = <T, Q>(param: T, param2: Q): [T, Q] => {
        return [param, param2]
    }
    const res4 = createWithGenricTuple<string, number>("sumon", 5)
    console.log(res4)

}