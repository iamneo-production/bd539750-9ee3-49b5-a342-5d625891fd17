using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations
{
    public partial class v5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "matchingUserId",
                table: "bookEvents",
                newName: "venueId");

            migrationBuilder.AddColumn<int>(
                name: "matchingId",
                table: "bookEvents",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "matchingId",
                table: "bookEvents");

            migrationBuilder.RenameColumn(
                name: "venueId",
                table: "bookEvents",
                newName: "matchingUserId");
        }
    }
}
