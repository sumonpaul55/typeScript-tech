{

    // Promise resolve and reject
    type AlphaNumeric = string | number

    const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
        return typeof param1 === "number" && typeof param2 === "number" ? param1 + param2 : param1.toString() + param2.toString()
    }




    // in guard

    type NorUser = {
        name: string
    }
    type Admin = {
        name: string;
        role: string;
    }
    const getUser = (user: NorUser | Admin) => {
        if ("role" in user) {
            console.log(`My role is ${user.role}`)
        } else {
            console.log(`My Name is ${user.name}`)
        }
    }
    getUser({ name: "Sumon", role: "developer" })







}



