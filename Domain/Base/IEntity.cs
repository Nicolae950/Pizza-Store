namespace Domain.Base;

public interface IEntity<TKey>
{
    public TKey Id { get; }
}