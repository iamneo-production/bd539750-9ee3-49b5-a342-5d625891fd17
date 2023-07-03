using WebApp.Database;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class UserController : Controller
    {
        private readonly BaseballDbContext _baseballDbContext;
        public UserController(BaseballDbContext baseballDbContext)
        {
            this._baseballDbContext = baseballDbContext; 
        }
        [HttpGet]
        /*
        public string GetUser()
        {
            return "Siva";
        }
        */
        public async Task<IActionResult> GetUser()
        {
            var user = await _baseballDbContext.User.ToListAsync();
            return Ok(user);
        }
        
    }
}
