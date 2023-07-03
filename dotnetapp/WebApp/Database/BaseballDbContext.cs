using WebApp.Models;
using Microsoft.EntityFrameworkCore;

namespace WebApp.Database
{
    public class BaseballDbContext : DbContext
    {
        public BaseballDbContext()
        {
           
        }

        public BaseballDbContext(DbContextOptions options) : base(options)
        {
          
        }

        public DbSet<User> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
          if (!options.IsConfigured)
          {
            options.UseSqlServer("connectionString");
          }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
          modelBuilder.Entity<User>().ToTable("user");
        }
    }
}