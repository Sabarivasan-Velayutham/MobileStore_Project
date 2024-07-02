using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using _777MobilesFinal.Models;
using Microsoft.Extensions.Logging;
using log4net.Core;
using _777MobilesFinal.Repository.RegistrationRepository;
using System.Collections;
using Microsoft.Extensions.DependencyInjection;

namespace _777MobilesFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationsController : ControllerBase
    {
        private readonly _777MobilesFinalContext _context;
        private readonly ILogger<RegistrationsController> _logger;  
        private readonly IRegistrationRepository _registrationRepository;


        public RegistrationsController(_777MobilesFinalContext context,ILogger<RegistrationsController> logger, IRegistrationRepository registrationRepository)
        {
            _context = context;
            _logger = logger;
            _registrationRepository = registrationRepository;
        }

        // GET: api/Registrations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Registration>>> GetRegistration()
        {
            // return await _context.Registration.ToListAsync();
            return await _registrationRepository.GetRegistration();
        }

        // GET: api/Registrations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Registration>> GetRegistration(int id)
        {
            //var registration = await _context.Registration.FindAsync(id);

            //if (registration == null)
            //{
            //    return NotFound();
            //}

            //return registration;
            try
            {
                return await _registrationRepository.GetRegistration(id);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return NotFound();
            }
        }
		// Authenticating user by their email and password
		// GET: api/RegisterUsers/alan@gmail.com/alan1
		[HttpGet("{email}/{password}")]
		public async Task<ActionResult<Registration>> GetRegisterUserByPwd(string email, string Password)
		{
			//try
			//{
			//    return await _registerUsersRepository.GetRegisterUserByPwd(email, password);
			//}
			//catch (Exception ex)
			//{
			//    _logger.LogError(ex.Message);

			//    return NotFound();
			//}

			Hashtable err = new Hashtable();
			try
			{
				var authUser = await _registrationRepository.GetRegistrationByPwd(email, Password);
				if (authUser != null)
				{
					return Ok(authUser);
				}
				else
				{
					err.Add("Status", "Error");

					err.Add("Message", "Invalid Credentials");

					return Ok(err);
				}
			}
			catch (Exception)
			{
				throw;
			}
		}

		//[Route("Login")]
		//public ActionResult Login(string email, string pwd)//([FromBody] User user)

		//{
		//    Hashtable err = new Hashtable();

		//    try
		//    {
		//        var result = _context.users.Where(x => x.Email.Equals(email) && x.Password.Equals(pwd)).FirstOrDefault();
		//        if (result != null) return Ok(result);
		//        else

		//        {

		//            err.Add("Status", "Error");

		//            err.Add("Message", "Invalid Credentials");

		//            return Ok(err);

		//        }
		//    }

		//    catch (Exception)

		//    {
		//        throw;

		//    }

		//    return null;
		//}


		// PUT: api/Registrations/5
		// To protect from overposting attacks, enable the specific properties you want to bind to, for
		// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
		[HttpPut("{id}")]
        public async Task<IActionResult> PutRegistration(int id, Registration registration)
        {
			//if (id != registration.UserId)
			//{
			//    return BadRequest();
			//}

			//_context.Entry(registration).State = EntityState.Modified;

			//try
			//{
			//    await _context.SaveChangesAsync();
			//}
			//catch (DbUpdateConcurrencyException)
			//{
			//    if (!RegistrationExists(id))
			//    {
			//        return NotFound();
			//    }
			//    else
			//    {
			//        throw;
			//    }
			//}

			//return NoContent();
			if (id != registration.UserId)
			{
				return BadRequest();
			}

			_context.Entry(registration).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!RegistrationExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}
			_logger.LogInformation("User updated successfully.");
			return NoContent();
		}

        // POST: api/Registrations
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Registration>> PostRegistration(Registration registration)
        {
            //_context.Registration.Add(registration);
            //await _context.SaveChangesAsync();
			await _registrationRepository.PostRegistration(registration);	
            return CreatedAtAction("GetRegistration", new { id = registration.UserId }, registration);
        }

        // DELETE: api/Registrations/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Registration>> DeleteRegistration(int id)
        {
			//var registration = await _context.Registration.FindAsync(id);
			//if (registration == null)
			//{
			//    return NotFound();
			//}

			//_context.Registration.Remove(registration);
			//await _context.SaveChangesAsync();

			//return registration;

			try {
				return await _registrationRepository.DeleteRegistration(id);
			}
			catch(Exception ex)
			{
				_logger.LogError(ex.Message);
				return NotFound();
			}
        }

        private bool RegistrationExists(int id)
        {
            return _registrationRepository.RegistrationExists(id);
        }
    }
}
