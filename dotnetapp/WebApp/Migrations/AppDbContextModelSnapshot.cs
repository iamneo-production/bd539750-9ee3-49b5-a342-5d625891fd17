﻿// <auto-generated AppDbContext/>
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApp.Context;

namespace WebApp.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.17")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebApp.Models.AdminModel", b =>
                {
                    b.Property<int>("adminId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("confirmpassword")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("mobileNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("token")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("userRole")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("adminId");

                    b.ToTable("admins");
                });

            modelBuilder.Entity("WebApp.Models.PlayersDetails", b =>
                {
                    b.Property<int>("playerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("playerAge")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("playerFirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("playerGender")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("playerLastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("teamId")
                        .HasColumnType("int");

                    b.HasKey("playerId");

                    b.HasIndex("teamId");

                    b.ToTable("playerInformations");
                });

            modelBuilder.Entity("WebApp.Models.RefereeModel", b =>
                {
                    b.Property<int>("refereeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("noOfMatches")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("refereeImage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("refereeLocation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("refereeName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("refereeId");

                    b.ToTable("referees");
                });

            modelBuilder.Entity("WebApp.Models.TeamModel", b =>
                {
                    b.Property<int>("teamId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("playerCounts")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("teamDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("teamImage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("teamLocation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("teamName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("teamId");

                    b.ToTable("teams");
                });

            modelBuilder.Entity("WebApp.Models.UserModel", b =>
                {
                    b.Property<int>("userId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("confirmpassword")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("mobileNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("token")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("userRole")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("userId");

                    b.ToTable("users");
                });

            modelBuilder.Entity("WebApp.Models.VenueModel", b =>
                {
                    b.Property<int>("venueId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("venueCapacity")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("venueDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("venueImageURL")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("venueLocation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("venueName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("venuePrice")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("venueId");

                    b.ToTable("venues");
                });

            modelBuilder.Entity("WebApp.Models.PlayersDetails", b =>
                {
                    b.HasOne("WebApp.Models.TeamModel", "Team")
                        .WithMany("Players")
                        .HasForeignKey("teamId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Team");
                });

            modelBuilder.Entity("WebApp.Models.TeamModel", b =>
                {
                    b.Navigation("Players");
                });
#pragma warning restore 612, 618
        }
    }
}
