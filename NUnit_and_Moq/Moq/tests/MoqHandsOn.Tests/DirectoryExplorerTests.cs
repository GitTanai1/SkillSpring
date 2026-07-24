using Moq;
using NUnit.Framework;

namespace MoqHandsOn.Tests;

[TestFixture]
public sealed class DirectoryExplorerTests
{
    private Mock<IDirectoryExplorer> directoryExplorerMock = null!;
    private const string File1 = "file.txt";
    private const string File2 = "file2.txt";

    [OneTimeSetUp]
    public void OneTimeSetUp()
    {
        directoryExplorerMock = new Mock<IDirectoryExplorer>();
    }

    [TestCase("C:\\DummyPath")]
    public void GetFiles_ShouldReturnMockedFiles(string path)
    {
        directoryExplorerMock.Setup(explorer => explorer.GetFiles(path))
            .Returns(new List<string> { File1, File2 });

        ICollection<string> files = directoryExplorerMock.Object.GetFiles(path);

        Assert.That(files, Is.Not.Null);
        Assert.That(files.Count, Is.EqualTo(2));
        Assert.That(files, Does.Contain(File1));
    }
}