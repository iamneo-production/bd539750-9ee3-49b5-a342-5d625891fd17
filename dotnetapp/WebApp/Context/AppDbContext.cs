//App DbContext File
using WebApp.Models;
using Microsoft.EntityFrameworkCore;

namespace WebApp.Context
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<AdminModel> admins { get; set; }
        public DbSet<VenueModel> venues { get; set; }
        public DbSet<UserModel> users { get; set; }
        public DbSet<RefereeModel> referees { get; set; }

        public DbSet<TeamModel> teams { get; set; }

        public DbSet<PlayersDetails> playerInformations { get; set; }
        
        public DbSet<EmailModel> emails { get; set; }

        public DbSet<EventModel> bookEvents { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VenueModel>().ToTable("venues");
            modelBuilder.Entity<AdminModel>().ToTable("admins");
            modelBuilder.Entity<RefereeModel>().ToTable("referees");
            modelBuilder.Entity<EmailModel>().ToTable("emails");
            modelBuilder.Entity<EventModel>().ToTable("bookEvents");
            modelBuilder.Entity<TeamModel>()
            .HasMany(t => t.Players)
            .WithOne(p => p.Team)
            .HasForeignKey(p => p.teamId);
           
        }

    
    }
}