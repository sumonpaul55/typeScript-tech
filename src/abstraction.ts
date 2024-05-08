// the process of simplifying complex systems by hiding unnecessary details and showing only essential features

{
    abstract class Shape {
        abstract calculatArea(): number
    }

    class Rectangle extends Shape {

        constructor(private width: number, private height: number) {
            super();
        }
        calculatArea(): number {
            return this.width * this.height
        }



    }

    const ami = new Rectangle(4, 5)
    console.log(ami.calculatArea())







}