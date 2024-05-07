// encapsulation hide 
{

    class Person {
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        // we can access private out side from class must use get keyword
        get getName(): string {
            return this._name
        }

        //  set with new data
        set setName(name: string) {
            this._name = name
        }
    }


    const p1 = new Person("firoz", 23)
    // console.log(p1.name) // not accessabel for private
    console.log(p1.getName) // for get no need to use () bracket
    p1.setName = "sumon";

    console.log(p1.getName)

}