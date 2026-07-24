using Moq;
using NUnit.Framework;

namespace MoqHandsOn.Tests;

[TestFixture]
public sealed class PlayerTests
{
    private Mock<IPlayerMapper> playerMapperMock = null!;

    [OneTimeSetUp]
    public void OneTimeSetUp()
    {
        playerMapperMock = new Mock<IPlayerMapper>();
    }

    [SetUp]
    public void SetUp()
    {
        playerMapperMock.Reset();
    }

    [TestCase("Ravi")]
    public void RegisterNewPlayer_ShouldAddPlayer_WhenNameDoesNotExist(string name)
    {
        playerMapperMock.Setup(mapper => mapper.IsPlayerNameExistsInDb(name)).Returns(false);

        Player player = Player.RegisterNewPlayer(name, playerMapperMock.Object);

        Assert.That(player.Name, Is.EqualTo(name));
        Assert.That(player.Age, Is.EqualTo(23));
        Assert.That(player.Country, Is.EqualTo("India"));
        Assert.That(player.NoOfMatches, Is.EqualTo(30));
        playerMapperMock.Verify(mapper => mapper.IsPlayerNameExistsInDb(name), Times.Once);
        playerMapperMock.Verify(mapper => mapper.AddNewPlayerIntoDb(name), Times.Once);
    }

    [TestCase("ExistingPlayer")]
    public void RegisterNewPlayer_ShouldThrow_WhenNameAlreadyExists(string name)
    {
        playerMapperMock.Setup(mapper => mapper.IsPlayerNameExistsInDb(name)).Returns(true);

        Assert.Throws<ArgumentException>(() => Player.RegisterNewPlayer(name, playerMapperMock.Object));
        playerMapperMock.Verify(mapper => mapper.IsPlayerNameExistsInDb(name), Times.Once);
        playerMapperMock.Verify(mapper => mapper.AddNewPlayerIntoDb(It.IsAny<string>()), Times.Never);
    }

    [TestCase("")]
    [TestCase(" ")]
    [TestCase(null)]
    public void RegisterNewPlayer_ShouldThrow_WhenNameIsEmpty(string? name)
    {
        Assert.Throws<ArgumentException>(() => Player.RegisterNewPlayer(name!, playerMapperMock.Object));
    }
}