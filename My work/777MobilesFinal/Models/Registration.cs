using System.ComponentModel.DataAnnotations;

namespace _777MobilesFinal.Models
{
    public class Registration
    {
        [Required]
        [Key]
        public int UserId { get; set; }

        [Required(ErrorMessage = "UserName is required")]
        [MinLength(4, ErrorMessage = "UserName should be a minimum of 4 characters")]
        [MaxLength(20, ErrorMessage = "UserName should be a maximum of 20 characters")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "EmailId is required")]
        [EmailAddress(ErrorMessage = "Invalid email format")]
        [MaxLength(50, ErrorMessage = "EmailId should be a maximum of 50 characters")]
        public string EmailId { get; set; }

        [Required]
        [MinLength(10, ErrorMessage = "Mobile Number should be 10 digits")]
        [MaxLength(10, ErrorMessage = "Mobile Number should not exceed 10 digits")]
        [RegularExpression("^[0-9]{10}$", ErrorMessage = "Invalid Mobile Number")]
        public string MobileNumber { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [MinLength(8, ErrorMessage = "Password should be a minimum of 8 characters")]
        [MaxLength(20, ErrorMessage = "Password should be a maximum of 20 characters")]
        public string CreatePassword { get; set; }

        [Required]
        [Compare("CreatePassword", ErrorMessage = "Password and Confirm Password should be the same")]
        public string ConfirmPassword { get; set; }

        [Required]
        [MinLength(4)]
        [MaxLength(5)]
        public string Usertype { get; set; }
    }
}
