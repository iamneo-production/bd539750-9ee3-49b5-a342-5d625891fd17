//Login Model
using System.ComponentModel.DataAnnotations;

namespace WebApp.Models
{
    public class LoginModel
    {
        public string email { get; set; }

        public string password { get; set; }

    }
}