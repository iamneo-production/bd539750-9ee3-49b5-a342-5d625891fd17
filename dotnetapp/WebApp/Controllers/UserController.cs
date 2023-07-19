using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApp.Database;
using WebApp.Models;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("/api/user")]
    public class UserController : Controller
    {
        
        private readonly BaseballDbContext _context;
        public UserController(BaseballDbContext context)
        {
            _context = context; 
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserModel>>> GetUser()
        {
            var user = await _context.user.ToListAsync();
            return Ok(user);
        }

        // POST: api/Referee
        [HttpPost]
        public async Task<ActionResult<UserModel>> addUserModel(UserModel userModel)
        {
            _context.user.Add(userModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserModel", new { id = userModel.Id }, userModel);
        }

        // DELETE: api/User/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> deleteUserModel(int id)
        {
            var userModel = await _context.user.FindAsync(id);
            if (userModel == null)
            {
                return NotFound();
            }

            _context.user.Remove(userModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        
    }
}
