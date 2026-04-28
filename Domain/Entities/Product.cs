using Domain.Abstractions;

namespace Domain.Entities;

public class Product : FullAuditEntity<Ulid>
{
    public string Name { get; private set; }
    public double Weight { get; private set; }
    public double Price { get; private set; }

    public static Product Create(string name, double weight, double price)
    {
        return new Product
        {
            Id = Ulid.NewUlid(),
            Name = name,
            Weight = weight,
            Price = price
        };
    }
}