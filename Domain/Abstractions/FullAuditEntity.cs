namespace Domain.Abstractions;

public abstract class FullAuditEntity<TKey> : AuditEntity<TKey>, IFullAuditEntity<TKey>
{
    public bool IsDeleted { get; private set; } = false;
    public DateTimeOffset DeletedAt { get; private set; } = default;
    public TKey DeletedBy { get; private set; } = default!;

    internal void SetDeleted(TKey deletedBy)
    {
        IsDeleted = true;
        DeletedAt = DateTimeOffset.Now;
        DeletedBy = deletedBy;
    }
}