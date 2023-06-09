//v2
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations
{
    public partial class v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "venues",
                columns: table => new
                {
                    venueId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    venueName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    venueImageURL = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    venueDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    venueCapacity = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    venuePrice = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    venueLocation = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_venues", x => x.venueId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "venues");
        }
    }
}
