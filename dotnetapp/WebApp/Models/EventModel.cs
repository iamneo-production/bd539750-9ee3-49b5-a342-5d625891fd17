
using System.ComponentModel.DataAnnotations;

namespace WebApp.Models
{
    public class EventModel
    {
        [Key]
        public int eventId { get; set; }
        public string eventName { get; set; }

        public string applicantName { get; set; }

        public string applicantAddress { get; set;}

        public string applicantMobile { get; set;}

        public string applicantEmail { get; set;}

        public string eventAddress { get; set;}

        public string eventFromDate { get; set;}

        public string eventToDate { get;set;}

        public string time { get; set;}

        public string members { get; set; }

        public string eventPrice { get; set; }

        public string ReefreeName { get; set; }

        public string team1{ get; set; }

        public string team2 { get; set; }

        public int matchingId { get; set; }

        public int venueId { get; set; }


    }
}