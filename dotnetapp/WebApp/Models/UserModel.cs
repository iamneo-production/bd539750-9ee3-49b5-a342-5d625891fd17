//User Model
using System.ComponentModel.DataAnnotations;

namespace WebApp.Models
{
    public class UserModel
    {
        [Key]
        public int userId { get; set; }

        public string userRole { get; set; }

        public string email { get; set; }

        public string username { get; set; }

        public string mobileNumber { get; set; }
    
        public string password { get; set; }

        public string confirmpassword { get; set; }

        public string token { get; set; }


    }
}
