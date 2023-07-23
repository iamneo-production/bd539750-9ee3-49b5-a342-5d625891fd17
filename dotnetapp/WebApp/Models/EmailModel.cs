using System.ComponentModel.DataAnnotations;

namespace WebApp.Models
{
    public class EmailModel
    {
        [Key]
        public int EmailId { get; set; }
        public string eventVenueName { get; set; }
        public string applicantName { get; set; }

        public string mobileNumber { get; set; }
        public string To { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
    }
}