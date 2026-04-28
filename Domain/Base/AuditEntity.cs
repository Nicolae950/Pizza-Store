namespace Domain.Base;

public abstract class AuditEntity<TKey> : Entity<TKey>, IAuditEntity<TKey>
{
    public DateTimeOffset CreatedAt { get; } = DateTimeOffset.UtcNow;
    public TKey CreatedBy { get; private set; } = default!;
    public DateTimeOffset UpdatedAt { get; private set; } = default;
    public TKey UpdatedBy { get; private set; } = default!;

    internal void SetCreated(TKey createdBy)
    {
        CreatedBy = createdBy;
    }

    internal void SetUpdated(TKey updatedBy)
    {
        UpdatedAt = DateTimeOffset.UtcNow;
        UpdatedBy = updatedBy;
    }
}