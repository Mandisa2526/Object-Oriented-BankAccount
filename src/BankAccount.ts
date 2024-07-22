export class BankAccount {
    // Private balance property
    private balance: number;

    // Constructor to initialize the balance
    constructor(balance: number) {
        this.balance = balance;
    }

    // Method to get the balance
    public getBalance(): number {
        return this.balance;
    }

    // Method to deposit an amount
    public deposit(amount: number): void {
        this.balance += amount;
    }

    // Method to withdraw an amount
    public withdraw(amount: number): boolean {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}
