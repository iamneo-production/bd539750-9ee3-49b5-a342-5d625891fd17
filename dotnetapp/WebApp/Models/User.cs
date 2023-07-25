using System.ComponentModel.DataAnnotations;

namespace WebApp.Models
{
    public class User 
    {
        [Key]
        public int Id { get; set; }
        public string UserName { get; set; }
        public int MobileNumber { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string UserRole { get; set; }
        
    }
} 