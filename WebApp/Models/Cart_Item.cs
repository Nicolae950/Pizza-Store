using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PizzaStore.Models
{
    public class Cart_Item
    {
        [Key]
        public int Id { get; set; } //PK

        // FK ID_Order
        [Required]
        public long Id_Order { get; set; }

        [ForeignKey("Id_Order")]
        public Order Order { get; set; }

        //FK ID_Product
        [Required]
        public int Id_Product { get; set; }

        [ForeignKey("Id_Product")]
        public Product Product { get; set; }

        [Required]
        public int Amount { get; set; }
    }
}
