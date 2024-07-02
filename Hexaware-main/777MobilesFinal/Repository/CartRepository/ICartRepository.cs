using _777MobilesFinal.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace _777MobilesFinal.Repository.CartRepository
{
	public interface ICartRepository
	{
		Task<ActionResult<IEnumerable<Cart>>> GetAddToCart();
		Task<ActionResult<Cart>> GetCart(int id);
		Task<ActionResult<Cart>> PutCart(int id, string cart);
		Task<ActionResult<Cart>> PostCart(Cart cart);
		Task<ActionResult<Cart>> DeleteCart(int id);

		bool CartExists(int id);

	}
}
