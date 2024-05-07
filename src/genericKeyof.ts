{


    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    // union type
    type Owner = keyof Vehicle;


    // onother with object
    const user = {
        name: "some one",
        age: 50,
        address: "somewhere"
    }
    // console.log(user["name"])


    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const me = {
        name: "paul",
        paul: "Chandra",
        age: 59
    }
    const resd = getPropertyValue(me, "paul");
    console.log(resd)
}