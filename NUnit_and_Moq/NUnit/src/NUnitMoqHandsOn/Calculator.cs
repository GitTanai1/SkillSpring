namespace NUnitMoqHandsOn;

public static class Calculator
{
    public static int Add(int first, int second) => first + second;

    public static int Divide(int dividend, int divisor)
    {
        if (divisor == 0)
        {
            throw new DivideByZeroException("Divisor cannot be zero.");
        }

        return dividend / divisor;
    }

    public static bool IsEven(int value) => value % 2 == 0;
}