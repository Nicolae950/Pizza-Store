using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistence.Configurations.Base;

public abstract class EntityConfiguration<T> : IEntityConfiguration<T>, IEntityTypeConfiguration<T> where T : class
{
    public void Configure(EntityTypeBuilder<T> builder)
    {
        Indexes(builder);
        Properties(builder);
        Relations(builder);
        Seeds(builder);
    }

    public abstract void Indexes(EntityTypeBuilder<T> builder);
    public abstract void Properties(EntityTypeBuilder<T> builder);
    public abstract void Relations(EntityTypeBuilder<T> builder);
    public abstract void Seeds(EntityTypeBuilder<T> builder);
}