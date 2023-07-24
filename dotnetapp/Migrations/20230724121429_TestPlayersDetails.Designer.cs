﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using dotnetapp.Context;

#nullable disable

namespace dotnetapp.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20230724121429_TestPlayersDetails")]
    partial class TestPlayersDetails
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("dotnetapp.Models.AdminModel", b =>
                {
                    b.Property<int>("adminId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("adminId"), 1L, 1);

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

                    b.ToTable("admins", (string)null);
                });

            modelBuilder.Entity("dotnetapp.Models.EventModel", b =>
                {
                    b.Property<int>("eventId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("eventId"), 1L, 1);

                    b.Property<string>("ReefreeName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("applicantAddress")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("applicantEmail")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("applicantMobile")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("applicantName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("eventAddress")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("eventFromDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("eventName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("eventPrice")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("eventToDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("matchingId")
                        .HasColumnType("int");

                    b.Property<string>("members")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("team1")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("team2")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("time")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("venueId")
                        .HasColumnType("int");

                    b.HasKey("eventId");

                    b.ToTable("bookEvents", (string)null);
                });

            modelBuilder.Entity("dotnetapp.Models.LoginModel", b =>
                {
                    b.Property<int>("loginId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("loginId"), 1L, 1);

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("token")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("loginId");

                    b.ToTable("logins", (string)null);
                });

            modelBuilder.Entity("dotnetapp.Models.PlayersDetails", b =>
                {
                    b.Property<int>("playerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("playerId"), 1L, 1);

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

            modelBuilder.Entity("dotnetapp.Models.RefereeModel", b =>
                {
                    b.Property<int>("refereeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("refereeId"), 1L, 1);

                    b.Property<string>("noOfMatches")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("refereeImage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("refereeLocation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("refereeName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("refereeId");

                    b.ToTable("referees", (string)null);
                });

            modelBuilder.Entity("dotnetapp.Models.TeamModel", b =>
                {
                    b.Property<int>("teamId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("teamId"), 1L, 1);

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

            modelBuilder.Entity("dotnetapp.Models.UserModel", b =>
                {
                    b.Property<int>("userId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("userId"), 1L, 1);

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

                    b.ToTable("users", (string)null);
                });

            modelBuilder.Entity("dotnetapp.Models.VenueModel", b =>
                {
                    b.Property<int>("venueId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("venueId"), 1L, 1);

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

                    b.ToTable("venues", (string)null);
                });

            modelBuilder.Entity("dotnetapp.Models.PlayersDetails", b =>
                {
                    b.HasOne("dotnetapp.Models.TeamModel", "Team")
                        .WithMany("Players")
                        .HasForeignKey("teamId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Team");
                });

            modelBuilder.Entity("dotnetapp.Models.TeamModel", b =>
                {
                    b.Navigation("Players");
                });
#pragma warning restore 612, 618
        }
    }
}
