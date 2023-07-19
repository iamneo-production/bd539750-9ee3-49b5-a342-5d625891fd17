using WebApp.Models;
using Microsoft.EntityFrameworkCore;

namespace WebApp.Database
{
    public class BaseballDbContext: DbContext
    {
        public BaseballDbContext(DbContextOptions<BaseballDbContext> options) : base(options) { }

    
        public DbSet<UserModel> user { get; set; }
        public DbSet<RefereeModel> referees { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        
            modelBuilder.Entity<RefereeModel>().ToTable("referees");
            modelBuilder.Entity<UserModel>().ToTable("user");
            
           
        }

    
    }
}