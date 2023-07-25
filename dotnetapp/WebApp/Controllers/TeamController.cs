//Team Controller
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
    public class TeamController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TeamController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Teams
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TeamModel>>> Getteams()
        {
            return await _context.teams.ToListAsync();
        }

        // GET: api/Teams/id
        [HttpGet("{id}")]
        public async Task<ActionResult<TeamModel>> getTeam(int id)
        {
            var team = await _context.teams.FindAsync(id);

            if (team == null)
            {
                return NotFound();
            }

            return team;
        }


        [HttpGet("playerDetail_Using_PlayerId/{id}")]
        public async Task<ActionResult<PlayersDetails>> getplayer(int id)
        {
            var player = await _context.playerInformations.FindAsync(id);

            if (player == null)
            {
                return NotFound();
            }

            return player;
        }


        [HttpGet("/getplayerDetails_using_TeamId/{id}")]
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
        [HttpPut("{id}")]
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


        //Edit Players using playerId
        [HttpPut("/editPlayers/{id}")]
        public async Task<IActionResult> PutPlayer(int id, PlayersDetails players)
        {
            if (id != players.playerId)
            {
                return BadRequest();
            }

            _context.Entry(players).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlayerExists(id))
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
        [HttpPost]
        public async Task<ActionResult<TeamModel>> addTeam(TeamModel team)
        {

            //Check Team
            if (await CheckTeamExistAsync(team.teamName))
            {
                return BadRequest(new { Message = "Team Already Exist" });
            }
            _context.teams.Add(team);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTeam", new { id = team.teamId }, team);
        }


         //Post(Save Player)

        [HttpPost("/saveplayer")]
        public async Task<ActionResult<PlayersDetails>> PostPlayer(PlayersDetails player)
        {

              //Check player
            if (await CheckPlayerExistAsync(player.playerFirstName,player.playerLastName,player.playerAge))
            {
                return BadRequest(new { Message = "Player Already Exist" });
            }

            _context.playerInformations.Add(player);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPlayer", new { id = player.playerId }, player);
        }

        // DELETE: api/Teams/id
        [HttpDelete("{id}")]
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


        //Delete Player
        [HttpDelete("/deletePlayers/{id}")]
        public async Task<IActionResult> DeletePlayers(int id)
        {
            var player = await _context.playerInformations.FindAsync(id);
            if (player == null)
            {
                return NotFound();
            }

            _context.playerInformations.Remove(player);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        private bool TeamExists(int id)
        {
            return _context.teams.Any(e => e.teamId == id);
        }

         private bool PlayerExists(int id)
        {
            return _context.playerInformations.Any(e => e.playerId == id);
        }


         private Task<bool> CheckPlayerExistAsync(string firstname, string lastname, string age) => _context.playerInformations.AnyAsync(x => x.playerFirstName==firstname && x.playerLastName==lastname && x.playerAge==age);
         private Task<bool> CheckTeamExistAsync(string teamName) => _context.teams.AnyAsync(x => x.teamName==teamName);
    }
}