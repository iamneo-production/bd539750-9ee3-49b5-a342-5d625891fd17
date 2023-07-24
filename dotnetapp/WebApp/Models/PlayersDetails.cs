//Players Detail Model
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Models
{
    public class PlayersDetails
    {
        [Key]
        public int playerId { get; set; }
        public string playerFirstName { get; set; }

        public string playerLastName { get; set; }

        public string playerAge { get; set; }

        public string playerGender { get; set; }

       
         public int teamId { get; set; } // Foreign key
         public TeamModel Team { get; set; } // Navigation property


    }
}
