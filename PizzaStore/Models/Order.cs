using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PizzaStore.Models
{
    public class Order
    {
        [Key]
        public long Id { get; set; } // PK
        [Required]
        public double Final_Price { get; set; }
        public DateTime Time_Stamp { get; set; }
    }
}
