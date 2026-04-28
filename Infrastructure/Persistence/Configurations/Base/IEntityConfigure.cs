using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistence.Configurations.Base;

public interface IEntityConfiguration<T> where T : class
{
    void Indexes(EntityTypeBuilder<T> builder);
    void Properties(EntityTypeBuilder<T> builder);
    void Relations(EntityTypeBuilder<T> builder);
    void Seeds(EntityTypeBuilder<T> builder);
}