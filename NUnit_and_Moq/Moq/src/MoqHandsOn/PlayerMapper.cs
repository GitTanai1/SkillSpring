namespace MoqHandsOn;

public sealed class PlayerMapper : IPlayerMapper
{
    private static readonly HashSet<string> Players = new(StringComparer.OrdinalIgnoreCase);

    public bool IsPlayerNameExistsInDb(string name)
    {
        return Players.Contains(name);
    }

    public void AddNewPlayerIntoDb(string name)
    {
        Players.Add(name);
    }
}