export class BankAccount {
    // balance stores the amount of money in the bank account.
    private balance: number;
    // stores the unique identifier for the bank account.
    private accountNumber: string;
      //balance has a default value of 0 if not provided.
    constructor(accountNumber: string,  balance: number = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    //  Returns the current balance of the account.

    public getBalance(): number {
        return this.balance;
    }
    // Returns the account number
    public getAccountNumber(): string { 
        return this.accountNumber;  
    }
// Increases the balance by the specified amount
    public deposit(amount: number): void {
        this.balance += amount;
    }
    // Decreases the balance by the specified amount if there are sufficient funds
    public withdraw(amount: number): boolean {
        // Returns true if the withdrawal is successful, otherwise returns false
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
//   Transfers the specified amount from this account to the targetAccount
    public transfer(amount: number, targetAccount: BankAccount): boolean {
        // attempts to withdraw the amount from this account. If successful, it deposits the amount into the targetAccount
        if (this.withdraw(amount)) {
            targetAccount.deposit(amount);
            return true;
        }
        return false;
    }
}
                             