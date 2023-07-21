using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnetapp.Migrations
{
    public partial class team : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "teams",
                columns: table => new
                {
                    teamId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    teamName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    teamDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    teamImage = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    playerCounts = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    teamLocation = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_teams", x => x.teamId);
                });

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

            migrationBuilder.DropTable(
                name: "teams");
        }
    }
}
