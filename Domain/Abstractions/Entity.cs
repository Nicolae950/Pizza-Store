namespace Domain.Abstractions;

public abstract class Entity<TKey> : IEntity<TKey>
{
    public TKey Id { get; protected init; } = default!;
}