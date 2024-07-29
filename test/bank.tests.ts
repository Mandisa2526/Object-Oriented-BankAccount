import { strict as assert } from 'assert';
import { Bank } from '../src/bank';
import { BankAccount } from '../src/BankAccount';

describe('Bank', function() {
    let bank: Bank;
    let account1: BankAccount;
    let account2: BankAccount;

    beforeEach(function() {
        bank = new Bank();
        account1 = new BankAccount( 'Alice', 1000);
        account2 = new BankAccount('Bob', 500);
        bank.addAccount(account1);
        bank.addAccount(account2);
    });

    it('should add accounts correctly', function() {
        assert.equal(bank.getAccount('Alice')?.getBalance(), 1000);
        assert.equal(bank.getAccount('Bob')?.getBalance(), 500);
    });

    it('should deposit to account correctly', function() {
        bank.deposit('Alice', 200);
        assert.equal(bank.getAccount('Alice')?.getBalance(), 1200);
    });

    it('should withdraw from account correctly if balance is sufficient', function() {
        const success = bank.withdraw('Bob', 100);
        assert.equal(success, true);
        assert.equal(bank.getAccount('Bob')?.getBalance(), 400);
    });

    it('should not withdraw from account if balance is insufficient', function() {
        const success = bank.withdraw('Bob', 600);
        assert.equal(success, false);
        assert.equal(bank.getAccount('Bob')?.getBalance(), 500);
    });

    it('should transfer between accounts correctly if balance is sufficient', function() {
        const success = bank.transfer('Alice', 'Bob', 300);
        assert.equal(success, true);
        assert.equal(bank.getAccount('Alice')?.getBalance(), 700);
        assert.equal(bank.getAccount('Bob')?.getBalance(), 800);
    });

    it('should not transfer between accounts if balance is insufficient', function() {
        const success = bank.transfer('Alice', 'Bob', 1200);
        assert.equal(success, false);
        assert.equal(bank.getAccount('Alice')?.getBalance(), 1000);
        assert.equal(bank.getAccount('Bob')?.getBalance(), 500);
    });
});
