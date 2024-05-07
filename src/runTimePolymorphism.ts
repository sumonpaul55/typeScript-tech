// method overwriding

{
    class Animal {
        public name: string;
        private age: number;//not accessable outside of this class and it's sub class
        protected dob: string // only accessable from subclass not accessable from outside
        constructor(name: string, age: number, dob: string) {
            this.name = name;
            this.age = age;
            this.dob = dob
        }

        sound(): void {
            console.log("Animal has sound")
        }
    }

    //subclass / child class
    class Dog extends Animal {
        color: string;
        constructor(name: string, age: number, dob: string, color: string) {
            super(name, age, dob);
            this.color = color
        }

        sound(): void {
            console.log("Dog can make sound", this.dob)//overwriting is a runtime polymorphism
        }
    }




}