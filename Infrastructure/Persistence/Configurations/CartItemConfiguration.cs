using Domain.Entities;
using Infrastructure.Persistence.Configurations.Base;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistence.Configurations;

public class CartItemConfiguration : EntityConfiguration<CartItem>
{
    public override void Indexes(EntityTypeBuilder<CartItem> builder)
    {
        throw new NotImplementedException();
    }

    public override void Properties(EntityTypeBuilder<CartItem> builder)
    {
        throw new NotImplementedException();
    }

    public override void Relations(EntityTypeBuilder<CartItem> builder)
    {
        throw new NotImplementedException();
    }

    public override void Seeds(EntityTypeBuilder<CartItem> builder) { }
}