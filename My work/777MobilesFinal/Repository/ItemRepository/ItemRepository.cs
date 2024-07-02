using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using _777MobilesFinal.Models;
using System.Linq;

namespace _777MobilesFinal.Repository.ItemRepository
{
	public class ItemRepository : IItemRepository
    {
        private readonly _777MobilesFinalContext _context;
	private readonly ILogger<ItemRepository> _logger;

	public ItemRepository(_777MobilesFinalContext context, ILogger<ItemRepository> logger)
	{
		_context = context;
		_logger = logger;
	}

	public async Task<ActionResult<IEnumerable<Item>>> GetSearchMobiles()
	{
		_logger.LogInformation("Getting all the mobiles successfully.");
		return await _context.SearchMobiles.ToListAsync();
	}

	public async Task<ActionResult<Item>> GetItem(int id)
	{
		var Bus = await _context.SearchMobiles.FindAsync(id);
		if (Bus == null)
		{
			throw new NullReferenceException("Sorry, no mobiles found with this id " + id);
		}
		else
		{
			return Bus;
		}
	}

	public async Task<ActionResult<Item>> PutItem(int id,  string item)
	{
		var Bus = await _context.SearchMobiles.FirstOrDefaultAsync(x => x.ItemId == id && x.ItemName == item);
		if (Bus == null)
		{
			throw new NullReferenceException("Sorry, no mobiles found with this id and name.");
		}
		else
		{
			return Bus;
		}
	}

	public async Task<ActionResult<Item>> PostItem(Item SearchMobiles)
	{
		_context.SearchMobiles.Add(SearchMobiles);
		await _context.SaveChangesAsync();
		_logger.LogInformation("Mobiles registered successfully.");

		return SearchMobiles;
	}

	public async Task<ActionResult<Item>> DeleteItem(int id)
	{
		var Bus = await _context.SearchMobiles.FindAsync(id);
		if (Bus == null)
		{
			throw new NullReferenceException("Sorry, no mobiles found with this id " + id);
		}
		else
		{
			_context.SearchMobiles.Remove(Bus);
			await _context.SaveChangesAsync();
			_logger.LogInformation("Mobiles deleted successfully.");

			return Bus;
		}
	}

	public bool ItemExists(int id)
	{
		return _context.SearchMobiles.Any(e => e.ItemId == id);
	}
}
}
