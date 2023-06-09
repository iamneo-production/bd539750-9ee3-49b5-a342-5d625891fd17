//v4
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations
{
    public partial class v4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "playerInformation");

            migrationBuilder.CreateTable(
                name: "playerInformations",
                columns: table => new
                {
                    playerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    playerFirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    playerLastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    playerAge = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    playerGender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    teamId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_playerInformations", x => x.playerId);
                    table.ForeignKey(
                        name: "FK_playerInformations_teams_teamId",
                        column: x => x.teamId,
                        principalTable: "teams",
                        principalColumn: "teamId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_playerInformations_teamId",
                table: "playerInformations",
                column: "teamId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "playerInformations");

            migrationBuilder.CreateTable(
                name: "playerInformation",
                columns: table => new
                {
                    playerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    playerAge = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    playerFirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    playerGender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    playerLastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    teamId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_playerInformation", x => x.playerId);
                    table.ForeignKey(
                        name: "FK_playerInformation_teams_teamId",
                        column: x => x.teamId,
                        principalTable: "teams",
                        principalColumn: "teamId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_playerInformation_teamId",
                table: "playerInformation",
                column: "teamId");
        }
    }
}
