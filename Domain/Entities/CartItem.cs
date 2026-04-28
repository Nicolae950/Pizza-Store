using Domain.Base;

namespace Domain.Entities;

public class CartItem : Entity<Ulid>
{
    public Ulid ProductId { get; private set; }
    public int Quantity { get; private set; }

    private CartItem() { }

    public static CartItem Create(Ulid productId, int quantity)
    {
        return new CartItem
        {
            Id =  Ulid.NewUlid(),
            ProductId = productId,
            Quantity = quantity
        };
    }
}