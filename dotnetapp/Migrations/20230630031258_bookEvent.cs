using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnetapp.Migrations
{
    public partial class bookEvent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "bookEvents");
        }
    }
}
