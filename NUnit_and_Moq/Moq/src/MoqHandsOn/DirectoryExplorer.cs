namespace MoqHandsOn;

public sealed class DirectoryExplorer : IDirectoryExplorer
{
    public ICollection<string> GetFiles(string path)
    {
        return Directory.GetFiles(path);
    }
}