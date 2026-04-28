using Domain.Entities;
using Infrastructure.Persistence.Configurations.Base;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistence.Configurations;

public class ProductConfiguration : EntityConfiguration<Product>
{
    public override void Indexes(EntityTypeBuilder<Product> builder)
    {
        throw new NotImplementedException();
    }

    public override void Properties(EntityTypeBuilder<Product> builder)
    {
        throw new NotImplementedException();
    }

    public override void Relations(EntityTypeBuilder<Product> builder)
    {
        throw new NotImplementedException();
    }

    public override void Seeds(EntityTypeBuilder<Product> builder) { }
}