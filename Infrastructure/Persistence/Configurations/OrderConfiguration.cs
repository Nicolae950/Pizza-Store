using Domain.Entities;
using Infrastructure.Persistence.Configurations.Base;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistence.Configurations;

public class OrderConfiguration : EntityConfiguration<Order>
{
    public override void Indexes(EntityTypeBuilder<Order> builder)
    {
        throw new NotImplementedException();
    }

    public override void Properties(EntityTypeBuilder<Order> builder)
    {
        throw new NotImplementedException();
    }

    public override void Relations(EntityTypeBuilder<Order> builder)
    {
        throw new NotImplementedException();
    }

    public override void Seeds(EntityTypeBuilder<Order> builder) { }
}