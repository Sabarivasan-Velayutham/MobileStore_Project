using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace _777MobilesFinal.Controllers
{
	//[Route("api/[controller]")]
	[ApiController]
	[ApiVersion("1.0")]
	[Route("api/{v:apiVersion}/sample")]
	public class ValuesController : ControllerBase
	{
		[HttpGet]
		public IActionResult Get()
		{
			return new ObjectResult("Using versioning");
		}
	}
}
