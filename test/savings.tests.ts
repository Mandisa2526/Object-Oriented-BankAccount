import { strict as assert } from 'assert';
import { SavingsAccount} from '../src/SavingsAccount';

describe('SavingsAccount', function() {
    it('should create a new SavingsAccount with specified interest rate', function() {
        const account = new SavingsAccount('Alice', 1000, 5);
        assert.strictEqual(account.getBalance(), 1000);
        assert.strictEqual(account.getAccountNumber(), 'Alice');
    });

    it('should apply interest correctly', function() {
        const account = new SavingsAccount('Alice', 1000, 5);
        account.applyInterest();
        assert.strictEqual(account.getBalance(), 1050); // 1000 + 5% of 1000 = 1050
    });

    it('should apply interest multiple times correctly', function() {
        const account = new SavingsAccount('Alice', 1000, 5);
        account.applyInterest();
        account.applyInterest();
        assert.strictEqual(account.getBalance(), 1102.5); // 1050 + 5% of 1050 = 1102.5
    });

    it('should not apply negative interest rate', function() {
        const account = new SavingsAccount('Alice', 1000, -5);
        account.applyInterest();
        assert.strictEqual(account.getBalance(), 950); // 1000 - 5% of 1000 = 950
    });

    it('should handle zero balance correctly', function() {
        const account = new SavingsAccount('Alice', 0, 5);
        account.applyInterest();
        assert.strictEqual(account.getBalance(), 0); // 0 + 5% of 0 = 0
    });
});   