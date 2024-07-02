using Microsoft.EntityFrameworkCore;
using _777MobilesFinal.Models;
using Microsoft.EntityFrameworkCore.Metadata;

namespace _777MobilesFinal.Models
{
	public class _777MobilesFinalContext : DbContext 
	{
		public _777MobilesFinalContext(DbContextOptions<_777MobilesFinalContext> options)
			   : base(options)
		{
		}

		public virtual DbSet<Registration> Registration { get; set; }
		public virtual DbSet<Item> SearchMobiles { get; set; }
		public virtual DbSet<Cart> AddToCart { get; set; }
	}
}
