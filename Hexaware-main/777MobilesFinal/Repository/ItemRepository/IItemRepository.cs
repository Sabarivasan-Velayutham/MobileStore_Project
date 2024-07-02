using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using _777MobilesFinal.Models;

namespace _777MobilesFinal.Repository.ItemRepository
{
	public interface IItemRepository
	{
		Task<ActionResult<IEnumerable<Item>>> GetSearchMobiles();
		Task<ActionResult<Item>> GetItem(int id);
		Task<ActionResult<Item>> PutItem(int id, string itemName);
		Task<ActionResult<Item>> PostItem(Item item);

		Task<ActionResult<Item>> DeleteItem(int id);
		bool ItemExists(int id);
	}
}
