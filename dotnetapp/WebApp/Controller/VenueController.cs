//Venue Controller
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Context;
using dotnetapp.Models;

namespace BaseballAPI.Controllers
{
    [Route("")]
    [ApiController]
    public class VenueController : ControllerBase
    {
        private readonly AppDbContext _context;

        public VenueController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Venues
        [HttpGet("admin/getVenue")]
        public async Task<ActionResult<IEnumerable<VenueModel>>> Getvenues()
        {
            return await _context.venues.ToListAsync();
        }

        // GET: api/Venues/id
        [HttpGet("admin/getVenueByID/{id}")]
        public async Task<ActionResult<VenueModel>> getVenue(int id)
        {
            var venue = await _context.venues.FindAsync(id);

            if (venue == null)
            {
                return NotFound();
            }

            return venue;
        }

     
        [HttpPut("admin/editVenue/{id}")]
        public async Task<IActionResult> editVenue(int id, VenueModel venue)
        {
            if (id != venue.venueId)
            {
                return BadRequest();
            }

            _context.Entry(venue).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VenueModelExists(id))
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

    
        [HttpPost("admin/addVenue")]
        public async Task<ActionResult <VenueModel>> addVenue(VenueModel venue)
        {
            _context.venues.Add(venue);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVenue", new { id = venue.venueId }, venue);
        }



        // DELETE: api/Venues/id
        [HttpDelete("admin/deleteVenue/{id}")]
        public async Task<IActionResult> deleteVenue(int id)
        {
            var venue = await _context.venues.FindAsync(id);
            if (venue == null)
            {
                return NotFound();
            }

            _context.venues.Remove(venue);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VenueModelExists(int id)
        {
            return _context.venues.Any(e => e.venueId == id);
        }
    }
}
