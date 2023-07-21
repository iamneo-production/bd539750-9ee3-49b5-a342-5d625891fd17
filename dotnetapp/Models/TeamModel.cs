
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
namespace dotnetapp.Models
{
    public class TeamModel
    {
        [Key]
        public int teamId { get; set; }

        public  string teamName {  get; set; }

        public string teamDescription { get; set; }

        public string teamImage { get; set; }

        public string playerCounts { get; set;}

        public string teamLocation { get; set; }

        public List<PlayersDetails> Players { get; set; }
    }

}
