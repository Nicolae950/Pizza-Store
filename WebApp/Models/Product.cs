using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PizzaStore.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; } // PK

        [Required]
        public string Name { get; set; }

        public float Weight { get; set; }

        [Required]
        public float Price { get; set; }

        [Required]
        public int Id_Type { get; set; }

        [ForeignKey("Id_Type")]
        public TypeOfProduct TypeOfProduct { get; set; }
    }
}
