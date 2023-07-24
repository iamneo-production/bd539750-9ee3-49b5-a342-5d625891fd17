//AuthController
using WebApp.Context;
using WebApp.Models;
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
using System;

namespace WebApp.Controllers
{
    [Route("")]
    [ApiController]

    public class AuthController : Controller
    {
        private readonly BaseballDbContext _authcontext;

        public AuthController(BaseballDbContext authcontext)
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

             //Check Email
            if (await CheckUserEmailExistAsync(registerObj.email))
            {
                return BadRequest(new { Message = "Email Already Exist" });
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

             //Check Email
            if (await CheckAdminEmailExistAsync(registerObj.email))
            {
                return BadRequest(new { Message = "Email Already Exist" });
            }


            registerObj.token = "";
            await _authcontext.admins.AddAsync(registerObj);
            await _authcontext.SaveChangesAsync();
            return Ok(new { Message = "Admin Registered! " });

        }

        [HttpPost("admin/login")]

        public async Task<IActionResult> Authenticate([FromBody] LoginModel registerObj)
        {
            if (registerObj == null)
            {
                return BadRequest();
            }

            // Here users and admins is a Table in database

            var user = await isUserPresent(registerObj.email,registerObj.password);
            var admin = await isAdminPresent(registerObj.email,registerObj.password);

            if (user != null)
            {
                user.token = CreateJwtUser(user);
                return Ok(new
                {
                    token = user.token,
                    Message = "User Login Success!"
                });
            }

            else if (admin != null)
            {
                admin.token = CreateJwtAdmin(admin);
                return Ok(new
                {
                    token = admin.token,
                    Message = "Admin Login Success!"
                });

            }

            return Unauthorized();
        }


        private Task<bool> CheckUserEmailExistAsync(string email) => _authcontext.users.AnyAsync(x => x.email==email);
        private Task<bool> CheckAdminEmailExistAsync(string email) => _authcontext.admins.AnyAsync(x => x.email==email);

          
        


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




            //Check if User present in UserModel users Table
            private async Task<UserModel> isUserPresent(string email, string password)
             {
             var user = await _authcontext.users.FirstOrDefaultAsync(x => x.email == email && x.password == password);
             return user;
             }

            //Check if Admin present in AdminModel admins Table
             private async Task<AdminModel> isAdminPresent(string email, string password)
             {
             var admin = await _authcontext.admins.FirstOrDefaultAsync(y => y.email == email && y.password == password);
             return admin;
             }
    }
}