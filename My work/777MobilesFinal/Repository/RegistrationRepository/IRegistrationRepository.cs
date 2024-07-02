using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using _777MobilesFinal.Models;

namespace _777MobilesFinal.Repository.RegistrationRepository
{
	public interface IRegistrationRepository
	{
		Task<ActionResult<IEnumerable<Registration>>> GetRegistration();
		Task<ActionResult<Registration>> GetRegistration(int id);
		Task<ActionResult<Registration>> GetRegistrationByPwd(string email, string Password);
		Task<ActionResult<Registration>> PostRegistration(Registration registration);
		Task<ActionResult<Registration>> DeleteRegistration(int id);
		bool RegistrationExists(int id);
	}
}
