using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnetapp.Migrations
{
    public partial class First : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "admins",
                columns: table => new
                {
                    adminId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    userRole = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    mobileNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    confirmpassword = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    token = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_admins", x => x.adminId);
                });

            migrationBuilder.CreateTable(
                name: "bookEvents",
                columns: table => new
                {
                    eventId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    eventName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    applicantName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    applicantAddress = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    applicantMobile = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    applicantEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    eventAddress = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    eventFromDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    eventToDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    time = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    members = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    eventPrice = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ReefreeName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    team1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    team2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    matchingId = table.Column<int>(type: "int", nullable: false),
                    venueId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_bookEvents", x => x.eventId);
                });

            migrationBuilder.CreateTable(
                name: "logins",
                columns: table => new
                {
                    loginId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    token = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_logins", x => x.loginId);
                });

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
                name: "users",
                columns: table => new
                {
                    userId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    userRole = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    username = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    mobileNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    confirmpassword = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    token = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.userId);
                });

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
                name: "admins");

            migrationBuilder.DropTable(
                name: "bookEvents");

            migrationBuilder.DropTable(
                name: "logins");

            migrationBuilder.DropTable(
                name: "playerInformations");

            migrationBuilder.DropTable(
                name: "referees");

            migrationBuilder.DropTable(
                name: "users");

            migrationBuilder.DropTable(
                name: "venues");

            migrationBuilder.DropTable(
                name: "teams");
        }
    }
}
