using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PizzaStore.Data;
using PizzaStore.Models;
using System.Dynamic;

namespace PizzaStore.Controllers
{
    public class CheckoutController : Controller
    {
        private readonly ApplicationDbContext _db;
        public CheckoutController(ApplicationDbContext db)
        {
            _db = db;
        }

        public int IncrementFunction(Product product, int[] products)
        {
            int count = 0;
            foreach (int slice_id in products)
            {
                if (product.Id == slice_id)
                {
                    count++;
                }
            }
            return count;
        }
        
        
        public IActionResult Index()
        {
            var products = TempData["pizzaData"] as int[];

            IEnumerable<Product> pizzaList = _db.Products;

            List<CartHelper> productList = new List<CartHelper>();

            foreach (Product product in pizzaList)
            {
                var checkout_product_counter = IncrementFunction(product, products);
                if (checkout_product_counter > 0)
                {
                    productList.Add(new CartHelper
                    {
                        Id = product.Id,
                        Name = product.Name,
                        Weight = product.Weight,
                        Price = product.Price,
                        Amount = checkout_product_counter
                    });
                }
            }

            CheckoutProductAndCartHelper products_model = new CheckoutProductAndCartHelper();
            products_model.CartProducts = productList;
            products_model.Saucages = from product in _db.Products
                                       join type in _db.Types on product.Id_Type equals type.Id
                                       where product.Id_Type == type.Id && type.Name == "sauce"
                                       select product;

            return View(products_model);
        }

        public double FinalPriceComputing(IEnumerable<CartHelper> products)
        {
            double final_price = 0D;
            foreach(var item in products)
            {
                final_price += (item.Price * item.Amount);
            }
            return final_price;
        }

        [HttpPost]
        public IActionResult Index(IEnumerable<CartHelper> listOfPizzaProducts)
        {
            if (ModelState.IsValid)
            {
                double FinalPrice = FinalPriceComputing(listOfPizzaProducts);
                Order order = new Order();
                order.Final_Price = FinalPrice;
                
                DateTime order_register_time = DateTime.Now;
                order.Time_Stamp = order_register_time;

                long id_of_order = order_register_time.Ticks;
                order.Id = id_of_order;
                _db.Orders.Add(order);
                _db.SaveChanges();

                foreach (var pizzaproduct in listOfPizzaProducts)
                {
                    Cart_Item item = new Cart_Item();
                    item.Id_Order = id_of_order;
                    item.Id_Product = pizzaproduct.Id;
                    item.Amount = pizzaproduct.Amount;
                    _db.Carts.Add(item);
                }
                _db.SaveChanges();
            }

            string returnURL = "/Pizza/Index"; 
            return Json(returnURL);
        }
    }
}
