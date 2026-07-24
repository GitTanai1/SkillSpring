using Moq;
using NUnit.Framework;

namespace MoqHandsOn.Tests;

[TestFixture]
public sealed class CustomerCommTests
{
    private Mock<IMailSender> mailSenderMock = null!;

    [OneTimeSetUp]
    public void OneTimeSetUp()
    {
        mailSenderMock = new Mock<IMailSender>();
    }

    [TestCase]
    public void SendMailToCustomer_ShouldReturnTrue_WhenMailIsSent()
    {
        mailSenderMock.Setup(sender => sender.SendMail(It.IsAny<string>(), It.IsAny<string>())).Returns(true);

        var customerComm = new CustomerComm(mailSenderMock.Object);

        bool result = customerComm.SendMailToCustomer();

        Assert.That(result, Is.True);
        mailSenderMock.Verify(sender => sender.SendMail("cust123@abc.com", "Some Message"), Times.Once);
    }
}