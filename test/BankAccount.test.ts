import { strict as assert } from 'assert';
import { BankAccount } from '../src/BankAccount';

describe('BankAccount', function() {
    let account: BankAccount;

    beforeEach(function() {
        account = new BankAccount('123456', 'Alice', 1000);
    });

    it('should initialize with correct balance', function() {
        assert.equal(account.getBalance(), 1000);
    });

    it('should deposit funds correctly', function() {
        account.deposit(500);
        assert.equal(account.getBalance(), 1500);
    });

    it('should withdraw funds correctly if balance is sufficient', function() {
        const success = account.withdraw(300);
        assert.equal(success, true);
        assert.equal(account.getBalance(), 700);
    });

    it('should not withdraw funds if balance is insufficient', function() {
        const success = account.withdraw(1200);
        assert.equal(success, false);
        assert.equal(account.getBalance(), 1000);
    });

    it('should transfer funds correctly if balance is sufficient', function() {
        const targetAccount = new BankAccount('654321', 'Bob', 500);
        const success = account.transfer(300, targetAccount);
        assert.equal(success, true);
        assert.equal(account.getBalance(), 700);
        assert.equal(targetAccount.getBalance(), 800);
    });

    it('should not transfer funds if balance is insufficient', function() {
        const targetAccount = new BankAccount('654321', 'Bob', 500);
        const success = account.transfer(1200, targetAccount);
        assert.equal(success, false);
        assert.equal(account.getBalance(), 1000);
        assert.equal(targetAccount.getBalance(), 500);
    });
});
