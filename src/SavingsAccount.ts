import { BankAccount } from "./BankAccount";
export class SavingsAccount extends BankAccount {
    private interestRate: number;

    constructor(accountNumber: string, balance: number = 0, interestRate: number) {
        super(accountNumber,balance); // Ensure balance is a number
        this.interestRate = interestRate;
    
    }

    public applyInterest(): void {
        const interest = this.getBalance() * this.interestRate / 100;
        this.deposit(interest);
    }
}

