//Team Controller
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Context;
using dotnetapp.Models;

namespace WebApp.Controllers
{
    [Route("")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TeamController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Teams
        [HttpGet("admin/getTeam")]
        public async Task<ActionResult<IEnumerable<TeamModel>>> Getteams()
        {
            return await _context.teams.ToListAsync();
        }

        // GET: api/Teams/id
        [HttpGet("getTeamUsingID{id}")]
        public async Task<ActionResult<TeamModel>> getTeam(int id)
        {
            var team = await _context.teams.FindAsync(id);

            if (team == null)
            {
                return NotFound();
            }

            return team;
        }


        [HttpGet("/getplayerDetails/{id}")]
        public async Task<ActionResult<PlayersDetails>> GetPlayer(int id)
        {
            var player = _context.playerInformations.Where(c => c.teamId == id);

            if (player == null)
            {
                return NotFound();
            }

            return Ok(player);
        }
        

        // PUT: api/Teams/id
        [HttpPut("editTeam/{id}")]
        public async Task<IActionResult> editTeam(int id, TeamModel team)
        {
            if (id != team.teamId)
            {
                return BadRequest();
            }

            _context.Entry(team).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeamExists(id))
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

        // POST: api/Teams
        [HttpPost("addTeam")]
        public async Task<ActionResult<TeamModel>> addTeam(TeamModel team)
        {
            _context.teams.Add(team);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTeam", new { id = team.teamId }, team);
        }

        // DELETE: api/Teams/id
        [HttpDelete("deleteTeam/{id}")]
        public async Task<IActionResult> deleteTeam(int id)
        {
            var team = await _context.teams.FindAsync(id);
            if (team == null)
            {
                return NotFound();
            }

            _context.teams.Remove(team);
            await _context.SaveChangesAsync();

            return NoContent();
        }

       

        private bool TeamExists(int id)
        {
            return _context.teams.Any(e => e.teamId == id);
        }
    }
}
