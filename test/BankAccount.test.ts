import { strict as assert } from 'assert';
import { BankAccount } from '../src/BankAccount';

describe('BankAccount', function() {
    let account: BankAccount;

    beforeEach(function() {
        account = new BankAccount('Alice', 1000);
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
    
    it('should return success result when transferring with sufficient funds', () => {
        const sourceAccount = new BankAccount('123', 1000);
        const targetAccount = new BankAccount('456', 500);

        const result = sourceAccount.transfer(300, targetAccount);

        assert.equal(result.success, true);
        assert.equal(result.message, 'Transfer successful.');
        assert.equal(sourceAccount.getBalance(), 700);
        assert.equal(targetAccount.getBalance(), 800);
    });

    it('should return failure result when transferring with insufficient funds', () => {
        const sourceAccount = new BankAccount('123', 100);
        const targetAccount = new BankAccount('456', 500);

        const result = sourceAccount.transfer(200, targetAccount);

        assert.equal(result.success, false);
        assert.equal(result.message, 'Insufficient funds for transfer.');
        assert.equal(sourceAccount.getBalance(), 100);
        assert.equal(targetAccount.getBalance(), 500);
    });

    it('should return failure result when transferring with zero or negative amount', () => {
        const sourceAccount = new BankAccount('123', 1000);
        const targetAccount = new BankAccount('456', 500);

        const zeroResult = sourceAccount.transfer(0, targetAccount);
        const negativeResult = sourceAccount.transfer(-100, targetAccount);

        assert.equal(zeroResult.success, false);
        assert.equal(zeroResult.message, 'Transfer amount must be greater than zero.');
        assert.equal(sourceAccount.getBalance(), 1000);
        assert.equal(targetAccount.getBalance(), 500);

        assert.equal(negativeResult.success, false);
        assert.equal(negativeResult.message, 'Transfer amount must be greater than zero.');
        assert.equal(sourceAccount.getBalance(), 1000);
        assert.equal(targetAccount.getBalance(), 500);
    });

});
