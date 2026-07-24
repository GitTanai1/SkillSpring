namespace MoqHandsOn;

public interface IDirectoryExplorer
{
    ICollection<string> GetFiles(string path);
}