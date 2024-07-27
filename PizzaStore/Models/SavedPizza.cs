using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PizzaStore.Models
{
    public class SavedPizza
    {
        [Key]
        public int Id { get; set; } //PK
        public string Name { get; set; }

        // FK ID_Order
        [Required]
        public long Id_Order { get; set; }

        [ForeignKey("Id_Order")]
        public Order Order { get; set; }
    }
}
