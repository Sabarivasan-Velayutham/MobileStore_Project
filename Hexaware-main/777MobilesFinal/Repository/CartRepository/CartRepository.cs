using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using _777MobilesFinal.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace _777MobilesFinal.Repository.CartRepository
{
	public class CartRepository : ICartRepository
	{
		private readonly _777MobilesFinalContext _context;
		private readonly ILogger<CartRepository> _logger;

		public CartRepository(_777MobilesFinalContext context, ILogger<CartRepository> logger)
		{
			_context = context;
			_logger = logger;
		}
		public async Task<ActionResult<IEnumerable<Cart>>> GetAddToCart()
		{
			_logger.LogInformation("Getting all the bookings successfully.");
			return await _context.AddToCart.ToListAsync();
		}

		public async Task<ActionResult<Cart>> GetCart(int id)
		{
			var booking = await _context.AddToCart.FindAsync(id);
			if (booking == null)
			{
				throw new NullReferenceException("Sorry, no booking found with this id " + id);
			}
			else
			{
				return booking;
			}
		}

		public async Task<ActionResult<Cart>> PutCart(int id, string cart)
		{
			var Bus = await _context.AddToCart.FirstOrDefaultAsync(x => x.CId == id && x.ItemName == cart);
			if (Bus == null)
			{
				throw new NullReferenceException("Sorry, no mobiles found with this id and name.");
			}
			else
			{
				return Bus;
			}
		}

		public async Task<ActionResult<Cart>> PostCart(Cart cart)
		{
			_context.AddToCart.Add(cart);
			await _context.SaveChangesAsync();
			_logger.LogInformation("Booking created successfully.");

			return cart;
		}

		public async Task<ActionResult<Cart>> DeleteCart(int id)
		{
			var booking = await _context.AddToCart.FindAsync(id);
			if (booking == null)
			{
				throw new NullReferenceException("Sorry, no mobiles found with this id " + id);
			}
			else
			{
				_context.AddToCart.Remove(booking);
				await _context.SaveChangesAsync();
				_logger.LogInformation("Booking deleted successfully.");

				return booking;
			}
		}

		public bool CartExists(int id)
		{
			return _context.AddToCart.Any(e => e.CId == id);
		}
	}
}


