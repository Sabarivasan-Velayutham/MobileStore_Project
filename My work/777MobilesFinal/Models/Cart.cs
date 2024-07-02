using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Policy;

namespace _777MobilesFinal.Models
{
	public class Cart
	{
		[Required]
		[Key]

		public int CId { get; set; }
		public virtual int UserId { get; set; }
		[ForeignKey("UserId")]
		public virtual int ItemId { get; set; }
		[ForeignKey("ItemId")]

		[Required(ErrorMessage = "Item Name is required")]
		[MinLength(3)]
		[MaxLength(50)]
		public string ItemName { get; set; }
		
		[Required(ErrorMessage = "Storage should be selected")]

		public string ItemStorage { get; set; }
		[Required(ErrorMessage = "Colour should be selected")]
		public string ItemColour { get; set; }

		[Required(ErrorMessage = "Quantity is required")]
		[Range(1, 10, ErrorMessage = "Quantity should be between 1 and 10")]
		public int Quantity { get; set; }

		[Required(ErrorMessage = "UserName is required")]
		[MinLength(3)]
		[MaxLength(15)]
		public string UserName { get; set; }
		[Required(ErrorMessage ="MobileNumber is required")]
		[MinLength(10)]
		[MaxLength(10)]

		public string MobileNumber { get; set; }
		[Required(ErrorMessage = "Address is required")]
		[MinLength(10)]
		[MaxLength(100)]

		public string Address { get; set; }



		public virtual Item Mobiles { get; set; }
		public virtual Registration User { get; set; }
	}
}
