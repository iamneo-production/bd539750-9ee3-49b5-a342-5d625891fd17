using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnetapp.Migrations
{
    public partial class referee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
        }
    }
}
