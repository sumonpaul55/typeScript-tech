{

    class Amout {
        name: string;
        balance: number
        constructor(name: string, balance: number) {
            this.name = name;
            this.balance = balance;
        }
        get getBalance() {
            return this.balance
        }
        set setBalance(am: number) {
            this.balance = this.balance + am
        }
    }

    const amout = new Amout("sumon", 60)
    console.log(amout.setBalance = 30)



}