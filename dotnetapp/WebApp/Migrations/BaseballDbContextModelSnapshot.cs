﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApp.Database;

namespace WebApp.Migrations
{
    [DbContext(typeof(BaseballDbContext))]
    partial class BaseballDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("WebApp.Models.RefereeModel", b =>
                {
                    b.Property<int>("refereeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

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

            modelBuilder.Entity("WebApp.Models.UserModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MobileNumber")
                        .HasColumnType("int");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserRole")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("user");
                });
#pragma warning restore 612, 618
        }
    }
}
