//Venue Model
using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{
    public class VenueModel
    {
        [Key]
        public int venueId { get; set; }

        public string venueName { get; set; }

        public string venueImageURL { get; set; }

        public string venueDescription { get; set; }

        public string venueCapacity { get; set; }

        public string venuePrice { get; set; }

        public string venueLocation { get; set; }


    }
}