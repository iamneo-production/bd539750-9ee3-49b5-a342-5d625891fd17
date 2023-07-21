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
    [Route("")]
    [ApiController]
    public class EventBookingController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EventBookingController(AppDbContext context)
        {
            _context = context;
        }

        
        [HttpGet("user/getSchedule")]
        public async Task<ActionResult<IEnumerable<EventModel>>> GetbookEvents()
        {
            return await _context.bookEvents.ToListAsync();
        }

        
        [HttpGet("getEventUsingID{id}")]
        public async Task<ActionResult<EventModel>> GetBookEvent(int id)
        {
            var bookEvent = await _context.bookEvents.FindAsync(id);

            if (bookEvent == null)
            {
                return NotFound();
            }

            return bookEvent;
        }


        [HttpGet("FetchEvent_Using_VenueId/{id}")]
        public async Task<ActionResult<EventModel>> GetBookEventsByVenueId(int id)
        {
            var Events = await _context.bookEvents
                .Where(be => be.venueId == id)
                .ToListAsync();

            if (Events.Count == 0)
                return NotFound();

            return Ok(Events);
        }


        
        [HttpPut("editEvent/{id}")]
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

      
        [HttpPost("bookEvent")]
        public async Task<ActionResult<EventModel>> PostBookEvent(EventModel bookEvent)
        {
            _context.bookEvents.Add(bookEvent);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBookEvent", new { id = bookEvent.eventId }, bookEvent);
        }


        [HttpDelete("deleteEvent/{id}")]
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
