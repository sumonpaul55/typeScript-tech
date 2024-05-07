// spread oparator
// rest oparator
// destructuring
{
    // const bros1: string[] = ["mr", "sumon", "paul"]
    // const bros2: string[] = ["mr", "kew", "paul"]

    // bros1.push(...bros2)
    // console.log(bros1)
    // console.log(...bros1, bros2)


    const greetings = (...friends: string[]) => {
        friends.forEach(element => {
            console.log("Hi", element)
        });
    }














}