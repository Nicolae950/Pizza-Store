using Domain.Base;

namespace Domain.Entities;

public class Order : FullAuditEntity<Ulid>
{
    public double Total { get; private set; }
    public DateTime OrderDate { get; private set; }

    private Order() { }

    public static Order Create(double total, DateTime orderDate)
    {
        return new Order
        {
            Id = Ulid.NewUlid(),
            Total = total,
            OrderDate = orderDate
        };
    }
}