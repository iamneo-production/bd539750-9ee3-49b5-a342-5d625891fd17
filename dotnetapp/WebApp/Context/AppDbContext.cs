using WebApp.Models;
using Microsoft.EntityFrameworkCore;

namespace WebApp.Context
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<VenueModel> venues { get; set; }
        //public DbSet<UserModel> users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VenueModel>().ToTable("venues");
          
        }
    }
}
