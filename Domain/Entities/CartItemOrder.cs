using Domain.Abstractions;

namespace Domain.Entities;

public class CartItemOrder : IEntity<Ulid>
{
    public Ulid Id { get; } = Ulid.NewUlid();
    public Ulid CartItemId { get; private set; }
    public CartItem CartItem { get; private set; }
    public Ulid OrderId { get; private set; }
    public Order Order { get; private set; }
}