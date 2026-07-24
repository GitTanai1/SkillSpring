namespace MoqHandsOn;

public interface IPlayerMapper
{
    bool IsPlayerNameExistsInDb(string name);

    void AddNewPlayerIntoDb(string name);
}