using Microsoft.AspNetCore.Mvc;
using _777MobilesFinal.Controllers;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System;
using _777MobilesFinal.Models;
using Microsoft.EntityFrameworkCore;

namespace _777MobilesFinal.Repository.RegistrationRepository
{
	public class RegistrationRepository : IRegistrationRepository
	{
		private readonly _777MobilesFinalContext _context;
		private readonly ILogger<RegistrationRepository> _logger;

		public RegistrationRepository(_777MobilesFinalContext context, ILogger<RegistrationRepository> logger)
		{
			_context = context;
			_logger = logger;
		}

		public async Task<ActionResult<IEnumerable<Registration>>> GetRegistration()
		{
			_logger.LogInformation("Getting all the users successfully.");
			return await _context.Registration.ToListAsync();
		}

		public async Task<ActionResult<Registration>> GetRegistration(int id)
		{
			var registration = await _context.Registration.FindAsync(id);
			if (registration == null)
			{
				throw new NullReferenceException("Sorry, no user found with this id " + id);
			}
			else
			{
				return registration;
			}
		}

		public async Task<ActionResult<Registration>> GetRegistrationByPwd(string email, string Password)
		{
			//var user = await _context.users.FirstOrDefaultAsync(x => x.Email == email && x.Password == password);
			//if (user == null)
			//{
			//    throw new NullReferenceException();
			//}
			//else
			//{
			//    return user;
			//}
			var user = await _context.Registration.FirstOrDefaultAsync(x => x.EmailId == email && x.CreatePassword == Password);
			if (user != null)
			{
				return user;
			}
			return null;
		}

		public async Task<ActionResult<Registration>> PostRegistration(Registration registration)
		{
			_context.Registration.Add(registration);
			await _context.SaveChangesAsync();
			_logger.LogInformation("User created successfully.");

			return registration;
		}

		public async Task<ActionResult<Registration>> DeleteRegistration(int id)
		{
			var registration = await _context.Registration.FindAsync(id);

			if (registration == null)
			{
				throw new NullReferenceException("Sorry, no user found with this id " + id);
			}
			else
			{
				_context.Registration.Remove(registration);
				await _context.SaveChangesAsync();
				_logger.LogInformation("User deleted successfully.");

				return registration;
			}
		}

		public bool RegistrationExists(int id)
		{
			return _context.Registration.Any(e => e.UserId == id);
		}
	}
}
	
