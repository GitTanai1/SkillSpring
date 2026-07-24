namespace MoqHandsOn;

public sealed class CustomerComm
{
    private readonly IMailSender mailSender;

    public CustomerComm(IMailSender mailSender)
    {
        this.mailSender = mailSender ?? throw new ArgumentNullException(nameof(mailSender));
    }

    public bool SendMailToCustomer()
    {
        mailSender.SendMail("cust123@abc.com", "Some Message");
        return true;
    }
}