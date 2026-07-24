namespace MoqHandsOn;

public interface IMailSender
{
    bool SendMail(string toAddress, string message);
}