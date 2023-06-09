//v3
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations
{
    public partial class v3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "refrees");

            migrationBuilder.CreateTable(
                name: "referees",
                columns: table => new
                {
                    refereeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    refereeName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    refereeImage = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    noOfMatches = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    refereeLocation = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_referees", x => x.refereeId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "referees");

            migrationBuilder.CreateTable(
                name: "refrees",
                columns: table => new
                {
                    refreeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    noOfMatches = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    refreeImage = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    refreeLocation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    refreeName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_refrees", x => x.refreeId);
                });
        }
    }
}
