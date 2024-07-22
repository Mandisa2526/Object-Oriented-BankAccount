export class BankAccount {
    private balance: number;

    constructor(
        public accountNumber: string,
        public holderName: string,
        initialBalance: number = 0.0,
        public accountType: string = 'Checking'
    ) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        } else {
            throw new Error("Deposit amount must be positive.");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else {
            throw new Error("Insufficient funds or invalid amount.");
        }
    }

    checkBalance(): number {
        return this.balance;
    }

    transfer(amount: number, otherAccount: BankAccount): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            otherAccount.deposit(amount);
        } else {
            throw new Error("Insufficient funds or invalid amount.");
        }
    }
}
