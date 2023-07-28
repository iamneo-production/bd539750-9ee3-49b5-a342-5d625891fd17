using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Context;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganiserController : ControllerBase
    {
        private readonly AppDbContext _context;

        public OrganiserController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/registers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserModel>>> GetUser()
        {
            return await _context.users.ToListAsync();
        }

        // GET: api/registers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserModel>> Getuser(int id)
        {
            var user = await _context.users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }



        // DELETE: api/registers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deleteuser(int id)
        {
            var user = await _context.users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool registerExists(int id)
        {
            return _context.users.Any(e => e.userId == id);
        }
    }
}