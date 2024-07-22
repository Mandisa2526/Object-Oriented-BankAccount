import { strict as assert } from 'assert';
import { BankAccount } from '../src/BankAccount';

describe('BankAccount', function() {
    let account1: BankAccount;
    let account2: BankAccount;

    beforeEach(function() {
        account1 = new BankAccount('123456', 'Alice', 1000);
        account2 = new BankAccount('654321', 'Bob', 500);
    });

    it('should initialize with correct values', function() {
        assert.equal(account1.accountNumber, '123456');
        assert.equal(account1.holderName, 'Alice');
        assert.equal(account1.checkBalance(), 1000);
        assert.equal(account1.accountType, 'Checking');
    });

    it('should deposit funds correctly', function() {
        account1.deposit(200);
        assert.equal(account1.checkBalance(), 1200);
    });

    it('should throw an error on negative deposit', function() {
        assert.throws(() => account1.deposit(-100), {
            name: 'Error',
            message: 'Deposit amount must be positive.'
        });
    });

    it('should withdraw funds correctly', function() {
        account1.withdraw(300);
        assert.equal(account1.checkBalance(), 700);
    });

    it('should throw an error on insufficient funds withdrawal', function() {
        assert.throws(() => account1.withdraw(1200), {
            name: 'Error',
            message: 'Insufficient funds or invalid amount.'
        });
    });

    it('should transfer funds correctly to another account', function() {
        account1.transfer(200, account2);
        assert.equal(account1.checkBalance(), 800);
        assert.equal(account2.checkBalance(), 700);
    });

    it('should throw an error on insufficient funds transfer', function() {
        assert.throws(() => account1.transfer(1200, account2), {
            name: 'Error',
            message: 'Insufficient funds or invalid amount.'
        });
    });
});
