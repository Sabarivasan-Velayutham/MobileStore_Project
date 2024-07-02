using Microsoft.EntityFrameworkCore.Migrations;

namespace _777MobilesFinal.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Registration",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(nullable: false),
                    EmailId = table.Column<string>(maxLength: 50, nullable: false),
                    MobileNumber = table.Column<string>(maxLength: 10, nullable: false),
                    CreatePassword = table.Column<string>(maxLength: 20, nullable: false),
                    ConfirmPassword = table.Column<string>(nullable: false),
                    usertype = table.Column<string>(maxLength: 5, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Registration", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "SearchMobiles",
                columns: table => new
                {
                    ItemId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ItemName = table.Column<string>(nullable: false),
                    ItemPrice = table.Column<string>(nullable: false),
                    ItemSpecification = table.Column<string>(nullable: false),
                    ItemStorage = table.Column<string>(nullable: false),
                    ItemColour = table.Column<string>(nullable: false),
                    ItemAvailability = table.Column<string>(nullable: true),
                    ItemImages = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SearchMobiles", x => x.ItemId);
                });

            migrationBuilder.CreateTable(
                name: "AddToCart",
                columns: table => new
                {
                    CId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(nullable: false),
                    ItemId = table.Column<int>(nullable: false),
                    ItemName = table.Column<string>(maxLength: 50, nullable: false),
                    ItemStorage = table.Column<string>(nullable: false),
                    ItemColour = table.Column<string>(nullable: false),
                    Quantity = table.Column<int>(nullable: false),
                    UserName = table.Column<string>(maxLength: 15, nullable: false),
                    MobileNumber = table.Column<string>(maxLength: 10, nullable: false),
                    Address = table.Column<string>(maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AddToCart", x => x.CId);
                    table.ForeignKey(
                        name: "FK_AddToCart_SearchMobiles_ItemId",
                        column: x => x.ItemId,
                        principalTable: "SearchMobiles",
                        principalColumn: "ItemId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AddToCart_Registration_UserId",
                        column: x => x.UserId,
                        principalTable: "Registration",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AddToCart_ItemId",
                table: "AddToCart",
                column: "ItemId");

            migrationBuilder.CreateIndex(
                name: "IX_AddToCart_UserId",
                table: "AddToCart",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AddToCart");

            migrationBuilder.DropTable(
                name: "SearchMobiles");

            migrationBuilder.DropTable(
                name: "Registration");
        }
    }
}
