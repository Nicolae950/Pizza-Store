using Domain.Entities;
using Infrastructure.Persistence.Configurations.Base;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistence.Configurations;

public class CartItemOrderConfiguration : EntityConfiguration<CartItemOrder>
{
    public override void Indexes(EntityTypeBuilder<CartItemOrder> builder)
    {
        throw new NotImplementedException();
    }

    public override void Properties(EntityTypeBuilder<CartItemOrder> builder)
    {
        throw new NotImplementedException();
    }

    public override void Relations(EntityTypeBuilder<CartItemOrder> builder)
    {
        throw new NotImplementedException();
    }

    public override void Seeds(EntityTypeBuilder<CartItemOrder> builder) { }
}