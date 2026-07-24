namespace NUnitMoqHandsOn;

public interface IProductRepository
{
    Product? GetById(int id);

    void Save(Product product);
}