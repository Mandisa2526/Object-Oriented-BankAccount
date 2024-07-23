import { strict as assert } from 'assert';
import { Bank } from '../src/bank';
import { BankAccount } from '../src/BankAccount';

describe('Bank', function() {
    let bank: Bank;
    let account1: BankAccount;
    let account2: BankAccount;

    beforeEach(function() {
        bank = new Bank();
        account1 = new BankAccount('123456', 'Alice', 1000);
        account2 = new BankAccount('654321', 'Bob', 500);
        bank.addAccount(account1);
        bank.addAccount(account2);
    });

    it('should add accounts correctly', function() {
        assert.equal(bank.getAccount('123456')?.getBalance(), 1000);
        assert.equal(bank.getAccount('654321')?.getBalance(), 500);
    });

    it('should deposit to account correctly', function() {
        bank.depositToAccount('123456', 200);
        assert.equal(bank.getAccount('123456')?.getBalance(), 1200);
    });

    it('should withdraw from account correctly if balance is sufficient', function() {
        const success = bank.withdrawFromAccount('654321', 100);
        assert.equal(success, true);
        assert.equal(bank.getAccount('654321')?.getBalance(), 400);
    });

    it('should not withdraw from account if balance is insufficient', function() {
        const success = bank.withdrawFromAccount('654321', 600);
        assert.equal(success, false);
        assert.equal(bank.getAccount('654321')?.getBalance(), 500);
    });

    it('should transfer between accounts correctly if balance is sufficient', function() {
        const success = bank.transferBetweenAccounts('123456', '654321', 300);
        assert.equal(success, true);
        assert.equal(bank.getAccount('123456')?.getBalance(), 700);
        assert.equal(bank.getAccount('654321')?.getBalance(), 800);
    });

    it('should not transfer between accounts if balance is insufficient', function() {
        const success = bank.transferBetweenAccounts('123456', '654321', 1200);
        assert.equal(success, false);
        assert.equal(bank.getAccount('123456')?.getBalance(), 1000);
        assert.equal(bank.getAccount('654321')?.getBalance(), 500);
    });
});
