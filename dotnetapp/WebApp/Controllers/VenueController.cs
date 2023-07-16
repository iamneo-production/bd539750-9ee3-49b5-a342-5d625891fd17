//Venue Controller
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
    public class VenueController : ControllerBase
    {
        private readonly AppDbContext _context;

        public VenueController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Venues
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VenueModel>>> Getvenues()
        {
            return await _context.venues.ToListAsync();
        }

        // GET: api/Venues/id
        [HttpGet("{id}")]
        public async Task<ActionResult<VenueModel>> getVenue(int id)
        {
            var venue = await _context.venues.FindAsync(id);

            if (venue == null)
            {
                return NotFound();
            }

            return venue;
        }

     
        [HttpPut("{id}")]
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

    
        [HttpPost]
        public async Task<ActionResult<VenueModel>> addVenue(VenueModel venue)
        {
               //Check Email
            if (await CheckVenueExistAsync(venue.venueName,venue.venueLocation))
            {
                return BadRequest(new { Message = "Venue Already Exist" });
            }
              

            _context.venues.Add(venue);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVenue", new { id = venue.venueId }, venue);
        }



        // DELETE: api/Venues/id
        [HttpDelete("{id}")]
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


        private Task<bool> CheckVenueExistAsync(string name ,string location) => _context.venues.AnyAsync(x => x.venueName==name && x.venueLocation==location);
    }
}
