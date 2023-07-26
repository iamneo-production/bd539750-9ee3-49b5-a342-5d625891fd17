
using System.ComponentModel.DataAnnotations;
namespace dotnetapp.Models
{
    public class RefereeModel
    {
        [Key]
        public int refereeId { get; set; }

        public string refereeName { get; set; }

        public string refereeImage { get; set; }

        public string noOfMatches { get; set;}

        public string refereeLocation { get; set;}
    }
}
