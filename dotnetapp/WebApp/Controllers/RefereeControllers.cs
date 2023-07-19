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
    [Route("api/[controller]")]
    [ApiController]
    public class RefereeController : ControllerBase
    {
        private readonly BaseballDbContext _context;

        public RefereeController(BaseballDbContext context)
        {
            _context = context;
        }

        // GET: api/Referee
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RefereeModel>>> viewReferees()
        {
            return await _context.referees.ToListAsync();
        }

        // GET: api/Referee/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<RefereeModel>> GetRefereeModel(int id)
        {
            var refereeModel = await _context.referees.FindAsync(id);

            if (refereeModel == null)
            {
                return NotFound();
            }

            return refereeModel;
        }

        // PUT: api/Referee/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> editReferee(int id, RefereeModel refereeModel)
        {
            if (id != refereeModel.refereeId)
            {
                return BadRequest();
            }

            _context.Entry(refereeModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RefereeModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Referee
        [HttpPost]
        public async Task<ActionResult<RefereeModel>> addRefereeModel(RefereeModel refereeModel)
        {
            _context.referees.Add(refereeModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRefereeModel", new { id = refereeModel.refereeId }, refereeModel);
        }

        // DELETE: api/Referee/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> deleteRefereeModel(int id)
        {
            var refereeModel = await _context.referees.FindAsync(id);
            if (refereeModel == null)
            {
                return NotFound();
            }

            _context.referees.Remove(refereeModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RefereeModelExists(int id)
        {
            return _context.referees.Any(e => e.refereeId == id);
        }
    }
}