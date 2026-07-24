namespace NUnitMoqHandsOn;

public sealed class ShoppingService
{
    private readonly IProductRepository repository;

    public ShoppingService(IProductRepository repository)
    {
        this.repository = repository ?? throw new ArgumentNullException(nameof(repository));
    }

    public decimal CalculateTotal(int productId, int quantity)
    {
        if (quantity <= 0)
        {
            throw new ArgumentOutOfRangeException(nameof(quantity));
        }

        Product? product = repository.GetById(productId);
        if (product is null)
        {
            throw new InvalidOperationException($"Product {productId} was not found.");
        }

        return product.Price * quantity;
    }

    public void ReserveStock(int productId, int quantity)
    {
        if (quantity <= 0)
        {
            throw new ArgumentOutOfRangeException(nameof(quantity));
        }

        Product? product = repository.GetById(productId);
        if (product is null)
        {
            throw new InvalidOperationException($"Product {productId} was not found.");
        }

        if (product.Stock < quantity)
        {
            throw new InvalidOperationException("Not enough stock.");
        }

        repository.Save(product with { Stock = product.Stock - quantity });
    }
}