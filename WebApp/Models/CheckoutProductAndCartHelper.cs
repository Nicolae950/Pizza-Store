namespace PizzaStore.Models
{
    public class CheckoutProductAndCartHelper
    {
        public IEnumerable<CartHelper> CartProducts { get; set; }
        public IEnumerable<Product> Saucages { get; set; }
    }
}
