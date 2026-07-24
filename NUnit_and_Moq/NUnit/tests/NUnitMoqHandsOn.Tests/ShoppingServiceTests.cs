using Moq;
using NUnit.Framework;

namespace NUnitMoqHandsOn.Tests;

[TestFixture]
public sealed class ShoppingServiceTests
{
    [Test]
    public void CalculateTotal_ReturnsPriceMultipliedByQuantity()
    {
        var repository = new Mock<IProductRepository>();
        repository.Setup(r => r.GetById(10)).Returns(new Product(10, "Keyboard", 50m, 20));

        var service = new ShoppingService(repository.Object);

        decimal total = service.CalculateTotal(10, 3);

        Assert.That(total, Is.EqualTo(150m));
        repository.Verify(r => r.GetById(10), Times.Once);
        repository.VerifyNoOtherCalls();
    }

    [Test]
    public void CalculateTotal_WhenProductMissing_ThrowsInvalidOperationException()
    {
        var repository = new Mock<IProductRepository>();
        repository.Setup(r => r.GetById(99)).Returns((Product?)null);

        var service = new ShoppingService(repository.Object);

        Assert.Throws<InvalidOperationException>(() => service.CalculateTotal(99, 1));
        repository.Verify(r => r.GetById(99), Times.Once);
    }

    [Test]
    public void ReserveStock_SavesUpdatedProduct()
    {
        var repository = new Mock<IProductRepository>();
        repository.Setup(r => r.GetById(5)).Returns(new Product(5, "Mouse", 25m, 12));

        var service = new ShoppingService(repository.Object);

        service.ReserveStock(5, 4);

        repository.Verify(r => r.Save(It.Is<Product>(p => p.Id == 5 && p.Stock == 8)), Times.Once);
        repository.Verify(r => r.GetById(5), Times.Once);
        repository.VerifyNoOtherCalls();
    }

    [Test]
    public void ReserveStock_WhenStockIsInsufficient_ThrowsAndDoesNotSave()
    {
        var repository = new Mock<IProductRepository>();
        repository.Setup(r => r.GetById(5)).Returns(new Product(5, "Mouse", 25m, 2));

        var service = new ShoppingService(repository.Object);

        Assert.Throws<InvalidOperationException>(() => service.ReserveStock(5, 3));
        repository.Verify(r => r.Save(It.IsAny<Product>()), Times.Never);
    }
}