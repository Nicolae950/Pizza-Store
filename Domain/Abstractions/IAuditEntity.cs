namespace Domain.Abstractions;

public interface IAuditEntity<TKey> : IEntity<TKey>
{
    public DateTimeOffset CreatedAt { get; }
    public TKey CreatedBy { get; }
    public DateTimeOffset UpdatedAt { get; }
    public TKey UpdatedBy { get; }
}