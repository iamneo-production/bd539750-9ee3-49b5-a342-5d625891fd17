
using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{
    public class LoginModel
    {
        [Key]
        public int loginId {get;set;}

        public string token { get; set; }

        public string email { get; set; }

        public string password { get; set; }

    }
}