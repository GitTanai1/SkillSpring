using NUnit.Framework;

namespace NUnitMoqHandsOn.Tests;

[TestFixture]
public sealed class CalculatorTests
{
    [SetUp]
    public void SetUp()
    {
    }

    [TearDown]
    public void TearDown()
    {
    }

    [TestCase(1, 2, 3)]
    [TestCase(-4, 10, 6)]
    [TestCase(0, 0, 0)]
    public void Add_ReturnsExpectedSum(int first, int second, int expected)
    {
        int result = Calculator.Add(first, second);

        Assert.That(result, Is.EqualTo(expected));
    }

    [TestCase(8, 2, 4)]
    [TestCase(9, 3, 3)]
    public void Divide_ReturnsExpectedQuotient(int dividend, int divisor, int expected)
    {
        int result = Calculator.Divide(dividend, divisor);

        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Divide_WithZeroDivisor_ThrowsDivideByZeroException()
    {
        var exception = Assert.Throws<DivideByZeroException>(() => Calculator.Divide(10, 0));

        Assert.That(exception?.Message, Does.Contain("Divisor cannot be zero."));
    }

    [TestCase(2, true)]
    [TestCase(7, false)]
    public void IsEven_ReturnsExpectedResult(int value, bool expected)
    {
        bool result = Calculator.IsEven(value);

        Assert.That(result, Is.EqualTo(expected));
    }
}