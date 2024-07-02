using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using _777MobilesFinal.Models;

namespace _777MobilesFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
		private readonly _777MobilesFinalContext _context;

		public ItemsController(_777MobilesFinalContext context)
		{
			_context = context;
		}

		// GET: api/BusDetails
		[HttpGet]
		public async Task<ActionResult<IEnumerable<Item>>> GetSearchMobiles()
		{
			return await _context.SearchMobiles.ToListAsync();
		}

		// GET: api/BusDetails/5
		[HttpGet("{id}")]
		public async Task<ActionResult<Item>> GetItem(int id)
		{
			var Mobiles = await _context.SearchMobiles.FindAsync(id);

			if (Mobiles == null)
			{
				return NotFound();
			}

			return Mobiles;
		}

		// PUT: api/BusDetails/5
		// To protect from overposting attacks, enable the specific properties you want to bind to, for
		// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
		[HttpPut("{id}")]
		public async Task<IActionResult> PutItem(int id, Item item)
		{
			if (id != item.ItemId)
			{
				return BadRequest();
			}

			_context.Entry(item).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!ItemExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}

			return NoContent();
		}

		// POST: api/BusDetails
		// To protect from overposting attacks, enable the specific properties you want to bind to, for
		// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
		[HttpPost]
		public async Task<ActionResult<Item>> PostItem(Item item)
		{
			_context.SearchMobiles.Add(item);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetMobiles", new { id = item.ItemId }, item);
		}

		// DELETE: api/BusDetails/5
		[HttpDelete("{id}")]
		public async Task<ActionResult<Item>> DeleteItem(int id)
		{
			var Mobiles = await _context.SearchMobiles.FindAsync(id);
			if (Mobiles == null)
			{
				return NotFound();
			}

			_context.SearchMobiles.Remove(Mobiles);
			await _context.SaveChangesAsync();

			return Mobiles;
		}

		private bool ItemExists(int id)
		{
			return _context.SearchMobiles.Any(e => e.ItemId == id);
		}
	}
}
