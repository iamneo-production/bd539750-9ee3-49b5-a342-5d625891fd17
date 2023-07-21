
using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{
    public class AdminModel
    {
        [Key]
        public int adminId { get; set; }

        public string userRole { get; set; }

        public string email { get; set; }

        public string mobileNumber { get; set; }

        public string password { get; set; }

        public string confirmpassword { get; set; }

        public string token { get; set; }


    }
}
