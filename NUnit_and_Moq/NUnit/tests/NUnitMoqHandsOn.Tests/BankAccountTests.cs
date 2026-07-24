using NUnit.Framework;

namespace NUnitMoqHandsOn.Tests;

[TestFixture]
public sealed class BankAccountTests
{
    [Test]
    public void Deposit_IncreasesBalance()
    {
        var account = new BankAccount(100m);

        account.Deposit(25m);

        Assert.That(account.Balance, Is.EqualTo(125m));
    }

    [Test]
    public void Withdraw_DecreasesBalance()
    {
        var account = new BankAccount(100m);

        account.Withdraw(40m);

        Assert.That(account.Balance, Is.EqualTo(60m));
    }

    [Test]
    public void Withdraw_WithInsufficientFunds_ThrowsInvalidOperationException()
    {
        var account = new BankAccount(20m);

        Assert.Throws<InvalidOperationException>(() => account.Withdraw(50m));
        Assert.That(account.Balance, Is.EqualTo(20m));
    }

    [Test]
    public void Deposit_WithNonPositiveAmount_ThrowsArgumentOutOfRangeException()
    {
        var account = new BankAccount(10m);

        Assert.Throws<ArgumentOutOfRangeException>(() => account.Deposit(0m));
    }
}