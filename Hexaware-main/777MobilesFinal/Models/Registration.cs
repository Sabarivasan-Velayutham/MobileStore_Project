using System.ComponentModel.DataAnnotations;

namespace _777MobilesFinal.Models
{
	public class Registration
	{
		[Required]
		[Key]
		public int UserId { get; set; }
		[Required(ErrorMessage = "UserName is required")]
		public string UserName { get; set; }
		[Required(ErrorMessage = "EmailId is required")]
		[MinLength(10)]
		[MaxLength(50)]
		[DataType(DataType.EmailAddress)]
		public string EmailId { get; set; }
		[Required]
		[MinLength(10)]
		[MaxLength(10)]

		public string MobileNumber { get; set; }
		[Required(ErrorMessage = "Password is required")]
		[MinLength(8)]
		[MaxLength(20)]
		public string CreatePassword { get; set; }
		[Required]
		[Compare("CreatePassword", ErrorMessage = "Password and Confirm Password should be the same")]
		public string ConfirmPassword { get; set; }
		[Required]
		[MinLength(4)]
		[MaxLength(5)]
		public string usertype { get; set; }
	}
}
