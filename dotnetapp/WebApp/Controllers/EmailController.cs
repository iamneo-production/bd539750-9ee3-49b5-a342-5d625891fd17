using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApp.Models;
using WebApp.Context;
using MimeKit;
using MailKit.Net.Smtp;
using MailKit.Security;

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {

        private readonly AppDbContext _context;

        public EmailController(AppDbContext context)
        {
            _context = context;
        }


        [HttpPost("sendEmail")]
        public async Task<ActionResult<EmailModel>> SendEmail([FromBody] EmailModel emailModel)
        {
            try
            {

                MimeMessage message = new MimeMessage();

                // Set the sender address
                message.From.Add(new MailboxAddress("Baseball Admin", "baseball.organisers@gmail.com"));

                // Set the recipient address
                message.To.Add(new MailboxAddress(emailModel.applicantName, emailModel.To));

                // Set the subject
                message.Subject = emailModel.Subject;

                // Create the HTML body part
                var bodyBuilder = new BodyBuilder();
                bodyBuilder.HtmlBody = emailModel.Message;

                // Set the body part of the message
                message.Body = bodyBuilder.ToMessageBody();

                // Configure the email client
                using (var client = new SmtpClient())
                {
                    client.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
                    client.Authenticate("baseball.organisers@gmail.com", "iyfxkltcrnpcdahb");

                    // Send the email
                    client.Send(message);
                    client.Disconnect(true);
                }


                _context.emails.Add(emailModel);
                await _context.SaveChangesAsync();

                return Ok(emailModel);

              

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

    }

}