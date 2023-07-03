//StartUp.cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using WebApp.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

namespace WebApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(option =>{option.AddPolicy("Mypolicy", builder =>{builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();});});
            services.AddSwaggerGen(c =>{c.SwaggerDoc("v2", new OpenApiInfo { Title = "WebApp", Version = "v2" });});
            services.AddAuthorization(); 
            services.AddControllers(); 
            services.AddDbContext<BaseballDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("SqlServerConnStr")));
          }

        public IConfiguration Configuration { get; }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseSwagger();

            app.UseSwaggerUI(c =>{c.SwaggerEndpoint("/swagger/v2/swagger.json", "WebApp");});

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("Mypolicy");

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
