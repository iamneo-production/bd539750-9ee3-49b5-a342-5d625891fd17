using dotnetapp.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnetapp.Context
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

         public DbSet<AdminModel> admins { get; set; }
        public DbSet<UserModel> users { get; set; }
        public DbSet<VenueModel> venues { get; set; }
        public DbSet<RefereeModel> referees { get; set; }
        public DbSet<LoginModel> logins { get; set; }

        public DbSet<TeamModel> teams { get; set; }

        public DbSet<PlayersDetails> playerInformations { get; set; }
         public DbSet<EventModel> bookEvents { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VenueModel>().ToTable("venues");
            modelBuilder.Entity<RefereeModel>().ToTable("referees");
            modelBuilder.Entity<AdminModel>().ToTable("admins");
            modelBuilder.Entity<UserModel>().ToTable("users");
            modelBuilder.Entity<LoginModel>().ToTable("logins");
            modelBuilder.Entity<EventModel>().ToTable("bookEvents");

             modelBuilder.Entity<TeamModel>()
            .HasMany(t => t.Players)
            .WithOne(p => p.Team)
            .HasForeignKey(p => p.teamId);

        }
    }
}