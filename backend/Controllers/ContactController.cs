using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using PortfolioApi.Services;

namespace PortfolioApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IEmailService _emailService;

        public ContactController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost]
        public async Task<IActionResult> SubmitContact([FromBody] ContactForm contactForm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var message = $@"
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> {contactForm.Name}</p>
                <p><strong>Email:</strong> {contactForm.Email}</p>
                <p><strong>Subject:</strong> {contactForm.Subject}</p>
                <p><strong>Message:</strong></p>
                <p>{contactForm.Message}</p>
            ";

            try
            {
                await _emailService.SendEmailAsync(
                    "your-email@example.com",
                    $"New Contact Form Submission: {contactForm.Subject}",
                    message
                );

                return Ok(new { message = "Thank you for your message. We'll get back to you soon!" });
            }
            catch (System.Exception ex)
            {
                // Log the error
                return StatusCode(500, new { message = "An error occurred while sending your message. Please try again later." });
            }
        }
    }

    public class ContactForm
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Subject { get; set; }

        [Required]
        [MinLength(10)]
        public string Message { get; set; }
    }
} 