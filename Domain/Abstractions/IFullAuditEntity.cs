namespace Domain.Abstractions;

public interface IFullAuditEntity<TKey> : IAuditEntity<TKey>
{
    public bool IsDeleted { get; }
    public DateTimeOffset DeletedAt { get; }
    public TKey DeletedBy { get; }
}