using Microsoft.AspNetCore.Mvc;
using PizzaStore.Data;
using PizzaStore.Models;

namespace PizzaStore.Controllers
{
    public class PizzaController : Controller
    {
        private readonly ApplicationDbContext _db;
        public PizzaController(ApplicationDbContext db)
        {
            _db = db;
        }
        public IActionResult Index()
        {
            var pizzaList = from product in _db.Products
                            join type in _db.Types on product.Id_Type equals type.Id
                            where product.Id_Type == type.Id && type.Name == "pizza"
                            select product;
            return View(pizzaList);
        }

        public IActionResult GetPizzaWithoutEditing(int? id, int numberOfSlices)
        {
            if (id == null || id == 0)
            {
                return NotFound();
            }
            var pizzaFromDb = _db.Products.Find(id);
            if (pizzaFromDb == null)
            {
                return NotFound();
            }
            List<int> SlicesIds = new List<int>();
            for (int i = 0;i < numberOfSlices; ++i)
            {
                SlicesIds.Add(id.GetValueOrDefault());
            }
            TempData["pizzaData"] = SlicesIds;
            return RedirectToAction("Index","Checkout");
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(PizzaHelper pizza_helper)
        {
            pizza_helper.NrOfSlices.ToString();
            TempData["pizzaData"] = pizza_helper.SlicesIds;
            return RedirectToAction("Index", "Checkout");
        }

        public IActionResult Custom(int? id)
        {
            if(id == null || id == 0)
            {
                return NotFound();
            }
            var pizzaFromDb = _db.Products.Find(id);
            if(pizzaFromDb == null)
            {
                return NotFound();
            }
            return View(pizzaFromDb);
        }

        [HttpPost]
        public IActionResult Custom(List<int> SlicesIds)
        {
            TempData["pizzaData"] = SlicesIds;
            string returnURL = "/Checkout/Index";
            return Json(returnURL);
        }

    }
}
