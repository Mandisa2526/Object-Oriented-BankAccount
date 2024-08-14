import { BankAccount } from "./BankAccount";

export interface ITransferable {
    transfer(amount: number, targetAccount: BankAccount): boolean;
}
