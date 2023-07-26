//AuthController
using dotnetapp.Context;
using dotnetapp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Text;
using System.Text.RegularExpressions;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;

namespace WebApp.Controllers
{
    [Route("")]
    [ApiController]

    public class AuthController : Controller
    {
        private readonly AppDbContext _authcontext;

        public AuthController(AppDbContext authcontext)
        {
            _authcontext = authcontext;
        }


        [HttpPost("registerUser")]

        public async Task<IActionResult> saveUser([FromBody] UserModel registerObj)
        {
            if (registerObj == null)
            {
                return BadRequest();
            }


            registerObj.token = "";
            await _authcontext.users.AddAsync(registerObj);
            await _authcontext.SaveChangesAsync();
            return Ok(new { Message = "User Registered! " });

        }


        [HttpPost("registerAdmin")]

        public async Task<IActionResult> saveAdmin([FromBody] AdminModel registerObj)
        {
            if (registerObj == null)
            {
                return BadRequest();
            }


            registerObj.token = "";
            await _authcontext.admins.AddAsync(registerObj);
            await _authcontext.SaveChangesAsync();
            return Ok(new { Message = "Admin Registered! " });

        }

        [HttpPost("/admin/login")]

        public async Task<IActionResult> Authenticate([FromBody] LoginModel registerObj)
        {
            if (registerObj == null)
            {
                return BadRequest();
            }

            // Here users and admins is a Table in database

            var user = await _authcontext.users.FirstOrDefaultAsync(x => x.email == registerObj.email && x.password == registerObj.password);
            var admin = await _authcontext.admins.FirstOrDefaultAsync(y => y.email == registerObj.email && y.password == registerObj.password);




            if (user != null)
            {
                registerObj.token=user.token = CreateJwtUser(user);
                return CreatedAtAction("GetLogin", new { id = registerObj.loginId, }, registerObj);
            }




            else if (admin != null)
            {
                registerObj.token=admin.token = CreateJwtAdmin(admin);
               return CreatedAtAction("GetLogin", new { id = registerObj.loginId }, registerObj);

            }

            return Unauthorized();
        }

        [HttpGet("getLogin{id}")]
        public async Task<ActionResult<LoginModel>> GetLogin(int id)
        {
            var login = await _authcontext.logins.FindAsync(id);

            if (login == null)
            {
                return NotFound();
            }

            return login;
        }


          //Authentication Using Jwt Token for Users

            private string CreateJwtUser(UserModel user)
           {
            var jwtTokenHandler=new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("veryverysecret.....");
            var identity = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.Role, user.userRole),
                new Claim(ClaimTypes.Name, user.username),
                new Claim(ClaimTypes.NameIdentifier, user.userId.ToString()),
            });

            var credentials= new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = identity,
                SigningCredentials = credentials,
            };

            var token= jwtTokenHandler.CreateToken(tokenDescriptor);
            return jwtTokenHandler.WriteToken(token);
         }


             //Authentication Using Jwt Token for Admins
             
            private string CreateJwtAdmin(AdminModel user)
          {
            var jwtTokenHandler=new JwtSecurityTokenHandler();
            var key = System.Text.Encoding.ASCII.GetBytes("veryverysecret.....");
            var identity = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.Role, user.userRole),
                new Claim(ClaimTypes.NameIdentifier, user.adminId.ToString()),
            });

            var credentials= new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = identity,
                SigningCredentials = credentials,
            };

            var token= jwtTokenHandler.CreateToken(tokenDescriptor);
            return jwtTokenHandler.WriteToken(token);
          }
    }
}