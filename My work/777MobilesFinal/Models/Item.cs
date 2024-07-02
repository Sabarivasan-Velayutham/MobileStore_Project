using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Security.Cryptography;

namespace _777MobilesFinal.Models
{
	public class Item
	{
		[Required]
		[Key]

		public int ItemId { get; set; }
		[Required(ErrorMessage = "ItemName is required")]
		public string ItemName { get; set; }
		[Required]
		public string ItemPrice { get; set; }
		[Required]
		public string ItemSpecification { get; set; }
		[Required(ErrorMessage = "Storage should be selected")]
		public string ItemStorage { get; set; }
		[Required(ErrorMessage = "Colour should be selected")]
		public string ItemColour { get; set; }
		public string ItemAvailability { get; set; }

		public string ItemImages { get; set; }
	}
}
