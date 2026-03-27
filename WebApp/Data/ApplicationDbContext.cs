using Microsoft.EntityFrameworkCore;
using PizzaStore.Models;

namespace PizzaStore.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<TypeOfProduct> Types { get; set; }
        public DbSet<Cart_Item> Carts { get; set; }
        public DbSet<SavedPizza> SavedPizza { get; set;}
        public DbSet<Order> Orders { get; set; }
    }
}
