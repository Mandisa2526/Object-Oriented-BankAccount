import { BankAccount } from './BankAccount';

export class Bank {
    private accounts: Map<string, BankAccount>;

    constructor() {
        this.accounts = new Map<string, BankAccount>();
    }

    public addAccount(account: BankAccount): void {
        this.accounts.set(account.getAccountNumber(), account);
    }

    public getAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.get(accountNumber);
    }

    public depositToAccount(accountNumber: string, amount: number): boolean {
        const account = this.getAccount(accountNumber);
        if (account) {
            account.deposit(amount);
            return true;
        }
        return false;
    }

    public withdrawFromAccount(accountNumber: string, amount: number): boolean {
        const account = this.getAccount(accountNumber);
        if (account) {
            return account.withdraw(amount);
        }
        return false;
    }

    public transferBetweenAccounts(
        fromAccountNumber: string,
        toAccountNumber: string,
        amount: number
    ): boolean {
        const fromAccount = this.getAccount(fromAccountNumber);
        const toAccount = this.getAccount(toAccountNumber);
        if (fromAccount && toAccount) {
            return fromAccount.transfer(amount, toAccount);
        }
        return false;
    }
}

