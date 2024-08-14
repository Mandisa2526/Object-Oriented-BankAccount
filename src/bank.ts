import { BankAccount } from './BankAccount';
import { TransferResult } from './transferResult';

export class Bank {
    // accounts is a Map that associates account numbers (string) with BankAccount instances. 
    private accounts: Map<string, BankAccount>;

    constructor() {
        //  initializes a new Map to store the bank accounts.
        this.accounts = new Map<string, BankAccount>();
    }
    // Adds a new BankAccount to the accounts map
    public addAccount(account: BankAccount): void {
        this.accounts.set(account.getAccountNumber(), account);
    }
//  Retrieves a BankAccount instance by its account number.
//Returns undefined if no account is found with the provided number
    public getAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.get(accountNumber);
    }

    public deposit(accountNumber: string, amount: number): boolean {
        const account = this.getAccount(accountNumber);
        if (account) {
            account.deposit(amount);
            return true;
        }
        return false;
    }

    public withdraw(accountNumber: string, amount: number): boolean {
        const account = this.getAccount(accountNumber);
        if (account) {
            return account.withdraw(amount);
        }
        return false;
    }

    public transfer(
        fromAccountNumber: string,
        toAccountNumber: string,
        amount: number
    ): boolean {
        const fromAccount = this.getAccount(fromAccountNumber);
        const toAccount = this.getAccount(toAccountNumber);
        if (fromAccount && toAccount) {
            const transferResult: TransferResult = fromAccount.transfer(amount, toAccount);
            return transferResult.success;  // Use the success property to return a boolean
        }
        return false;
    }
}

