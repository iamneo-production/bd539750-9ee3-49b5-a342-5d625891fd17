using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApp.Context;
using WebApp.Models;

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EventController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/BookEvents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EventModel>>> GetbookEvents()
        {
            return await _context.bookEvents.ToListAsync();
        }

        // GET: api/BookEvents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EventModel>> GetBookEvent(int id)
        {
            var bookEvent = await _context.bookEvents.FindAsync(id);

            if (bookEvent == null)
            {
                return NotFound();
            }

            return bookEvent;
        }

        // PUT: api/BookEvents/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookEvent(int id, EventModel bookEvent)
        {
            if (id != bookEvent.eventId)
            {
                return BadRequest();
            }

            _context.Entry(bookEvent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookEventExists(id))
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

        // POST: api/BookEvents
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EventModel>> PostBookEvent(EventModel bookEvent)
        {
            _context.bookEvents.Add(bookEvent);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBookEvent", new { id = bookEvent.eventId }, bookEvent);
        }

        // DELETE: api/BookEvents/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookEvent(int id)
        {
            var bookEvent = await _context.bookEvents.FindAsync(id);
            if (bookEvent == null)
            {
                return NotFound();
            }

            _context.bookEvents.Remove(bookEvent);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BookEventExists(int id)
        {
            return _context.bookEvents.Any(e => e.eventId == id);
        }
    }
}
