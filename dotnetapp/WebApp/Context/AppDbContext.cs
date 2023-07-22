//App DbContext File
using WebApp.Models;
using Microsoft.EntityFrameworkCore;

namespace WebApp.Context
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<RefereeModel> referees { get; set; }

        public DbSet<TeamModel> teams { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            modelBuilder.Entity<RefereeModel>().ToTable("referees");
            modelBuilder.Entity<TeamModel>()
            .HasMany(t => t.Players)
            .WithOne(p => p.Team)
            .HasForeignKey(p => p.teamId);
           
        }

    
    }
}