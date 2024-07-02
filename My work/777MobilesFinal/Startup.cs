using _777MobilesFinal.Models;
using _777MobilesFinal.Repository.RegistrationRepository;
using log4net.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _777MobilesFinal
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddCors(option =>
			{
				option.AddPolicy("AllowAngularOrigins", builder =>
				{
					builder.WithOrigins(
						"http://localhost:4200")
					.AllowAnyMethod()
					.AllowAnyHeader();
				});
			});
			services.AddControllers();
			services.AddDbContext<_777MobilesFinalContext>(item => item.UseSqlServer(Configuration.GetConnectionString("DBConnection")));
			services.AddMvc();
			services.AddScoped<IRegistrationRepository, RegistrationRepository>();
			services.AddSwaggerGen();
			services.AddSwaggerGen(c =>
			{
				c.SwaggerDoc("v1", new OpenApiInfo
				{
					Version = "v1",
					Title = "Implement Swagger UI",
					Description = "A simple example to Implement Swagger UI",
				});
			});
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			app.UseRouting();

			app.UseAuthorization();

			app.UseCors("AllowAngularOrigins");

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
			});
			app.UseSwagger();
			app.UseSwaggerUI(c =>
			{
				c.SwaggerEndpoint("/swagger/v1/swagger.json", "Showing API V1");

			});
		}
	}
}
