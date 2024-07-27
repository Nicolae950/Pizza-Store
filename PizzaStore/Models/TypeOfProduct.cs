
using System.ComponentModel.DataAnnotations;

namespace PizzaStore.Models
{
    public class TypeOfProduct
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
    }
}
