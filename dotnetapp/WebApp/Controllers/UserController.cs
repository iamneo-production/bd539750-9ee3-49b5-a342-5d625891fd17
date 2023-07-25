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
        private readonly BaseDbContext _baseDbContext;
        public UserController(BaseDbContext baseDbContext)
        {
            this._baseDbContext = baseDbContext; 
        }
        [HttpGet]
        public async Task<IActionResult> GetUser()
        {
            var user = await _baseDbContext.User.ToListAsync();
            return Ok(user);
        }
    }
    
}
