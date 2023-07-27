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
    [Migration("20230629040729_Venue")]
    partial class Venue
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

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
#pragma warning restore 612, 618
        }
    }
}