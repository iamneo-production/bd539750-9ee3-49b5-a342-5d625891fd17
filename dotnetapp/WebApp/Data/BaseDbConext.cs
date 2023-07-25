using WebApp.Models;
using Microsoft.EntityFrameworkCore;

namespace WebApp.Database
{
    public class BaseDbContext : DbContext
    {

        public BaseDbContext(DbContextOptions options) : base(options)
        {
               
        }

        public DbSet<User> User { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
          modelBuilder.Entity<User>().ToTable("user");
        }
    }
}