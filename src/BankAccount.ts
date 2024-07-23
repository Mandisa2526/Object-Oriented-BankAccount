export class BankAccount {
    private balance: number;
    private accountNumber: string;

    constructor(accountNumber: string, holderName: string, balance: number = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public getBalance(): number {
        return this.balance;
    }

    public getAccountNumber(): string {
        return this.accountNumber;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public withdraw(amount: number): boolean {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }

    public transfer(amount: number, targetAccount: BankAccount): boolean {
        if (this.withdraw(amount)) {
            targetAccount.deposit(amount);
            return true;
        }
        return false;
    }
}
                             